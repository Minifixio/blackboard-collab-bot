const puppeteer = require('puppeteer');
const fs = require('fs');
const cmdManager = require('./command_manager.js')
const bot = require('./bot.js')
var sockets = require('./main.js')

module.exports.WebBrowser = class WebBrowser {

    constructor(url, botName, botTag, bot) {
        this.url = url
        this.botName = botName
        this.botTag = botTag
        this.bot = bot
        this.socketEmit = sockets.socketEmit
    }

    async init() {

        // Start pupperteer
        this.browser = await puppeteer.launch({
            headless: false,
            args: [ '--use-fake-ui-for-media-stream'],
            ignoreDefaultArgs: ['--mute-audio']
        });

        this.page = await this.browser.newPage()
        // Unsing specific agent to make sure the website recognize the browser even in headless mode
        await this.page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')

        await this.gotTo(this.url)
        // TODO : add conneciton for prod
    }

    /**
     * Got to a specific URL
     * @param {string} url 
     */
    async gotTo(url) {
        this.socketEmit('bot-status', 'connecting')

        try {
            await this.page.goto(url, { waitUntil: 'load' });
        } catch(e) {
            console.log('wrong url')
            this.socketEmit('bot-status', 'wrong-url')
        }
    }

    async kill() {
        await this.browser.close()
    }

    async initForTest() {
        // Using WSEnpoint to reuse old session (so I don't have to restart the browser each time)
        // Calling reuse_browser.js first to make sure a session is running in the background
        // Storing the WSEnpoint in a txt file
        let browserWSEndpoint = fs.readFileSync('./models/browser_endpoints.txt', 'utf8')

        if (browserWSEndpoint != '') {

            try {
                console.log('browser already exists, using it')
                this.browser = await puppeteer.connect({browserWSEndpoint: browserWSEndpoint})
                let pages = await this.browser.pages()
                this.page = pages.find(page => page.url().includes('blackboard') || page.url().includes('bbcollab'))
            } catch {
                await this.init()
            }

        } else {
            await this.init()
        }

        // This icon is only visible on the main page. If it is not present, then we are on the login page
        this.page.waitForSelector('#status-selector-toggle > bb-svg-icon', { timeout: 5000 }).then(async() => {
            // Reloading to make sure to remove any page.evalute() scripts already running on the page
            await this.page.reload()
            await this.page.waitFor(2000)
            await this.click('#side-panel-open')
            this.listenForChat()
        })
        .catch(async() => {
            await this.skipTestPage()
            await this.skipMicSetup()
            this.listenForChat()
        })

    }

    /**
     * Tool function to click an element on the page after waiting for its loading 
     * @param {string} selector 
     */
    async click(selector) {
        await this.page.waitForSelector(selector, {timeout: 100000})
        await this.page.click(selector)
    }

    /**
     * Send a chat
     * @param {string} msg 
     */
    async sendChat(msg) {
        await this.page.focus('#message-input')
        await this.page.type('#message-input', msg)
        await this.page.keyboard.press('Enter')
    }

    /**
     * Start the listening for chat process
     */
    async listenForChat() {
        console.log('start listening')
        this.socketEmit('bot-status', 'live')

        await this.page.exposeFunction('callbackChat', newChat);

        await this.page.evaluate(() => {
            var targetNode = document.querySelector("#chat-channel-history");
            var config = { childList: true };
            var obsCallback = function(mutationsList, observer) {
                for(let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        console.log('A child node has been added or removed.');
                        console.log(mutation.addedNodes[0].querySelector("div > div > div > p.activity-body.chat-message__body.ng-binding").textContent);
                        var messageNode = mutation.addedNodes[0].querySelector("div > div > div > p.activity-body.chat-message__body.ng-binding");
                        var username = '';

                        if (messageNode.parentElement.getElementsByTagName('h4').length == 0) {
                            for (let children of targetNode.children) {
                                
                                if (children.getElementsByTagName('h4').length > 0) {
                                    username = children.getElementsByTagName('h4')[0].textContent;
                                }
                            }
                        } else {
                            username = messageNode.parentElement.getElementsByTagName('h4')[0].textContent.trim()
                        }
                        console.log([messageNode.textContent, username])
                        callbackChat([messageNode.textContent, username]);
                    }
                }
            };
            var observer = new MutationObserver(obsCallback);
            observer.observe(targetNode, config);
        })
    }

    /**
     * For testing purpose only
     */
    async skipTestPage() {
        console.log('skipping test page')

        await this.page.reload()
        await this.page.waitForSelector('#field0')

        var inputs = [
            {selector: '#field0', name: this.botName},
            {selector: '#field1', name: this.botName},
            {selector: '#field2', name: `${this.botName}@${this.botName}.bot`},
        ]

        for (let input of inputs) {
            await this.page.$eval(input.selector, (el, value) => el.value = value, input.name)
        }

        await this.page.waitFor(2000)
        await this.page.click('#SessionStartButton')

        console.log('test page skipped')
    }

    /**
     * Skipping the mic page
     * TODO : Make sure to select the correct source according to the app mic input
     */
    async skipMicSetup() {
        console.log('setting up mic')
        this.socketEmit('bot-status', 'setup-mic')

        //#dialog-description-audio > div.techcheck-audio-skip.ng-scope > button => selector to ignore audio
        //#techcheck-video-ok-button => selector to set video as OK
        //await this.page.waitForXPath('//*[@id="dialog-description-audio"]/div[2]/button', {timeout: 10000000})

        await this.page.waitForSelector('#techcheck-audio-mic-select', {timeout: 10000000})
        //await this.click('#dialog-description-audio > div.techcheck-audio-skip.ng-scope')
        //await this.click('#techcheck-video-ok-button')
        await this.click('#techcheck-modal > button')
        await this.click('#announcement-modal-page-wrap > button')
        await this.click('#side-panel-open')
        await this.click('#chat-channel-scroll-content > ul > li > ul > li > bb-channel-list-item > button')

        console.log('mic set up')
        socketEmit('bot-status', 'setup-mic-done')
    }

    /**
     * To make sure the client doesn't get kicked for inactivity
     * @param {boolean} alive 
     */
    async keepAlive(alive) { // To try

        if (alive) {
            var aliveTiemout = setTimeout(async() => {
                await this.click('#status-selector-toggle')
                await this.click('#status-selector-toggle')
                this.keepAlive()
            }, 600000)

        } else {
            clearTimeout(aliveTiemout)
        }
    }
}

/**
 * Called when a new message is sent. It is outside of the WebBrowser Class because of the page.evaluate()
 * @param {string} chat 
 */
function newChat(chat) {

    let message = chat[0]
    let username = chat[1].trim()
    let valid = true
    let currentBot = bot.getBotInfos()
    let botName = currentBot.name

    // For tesing purpose only
    if (currentBot.testing) {
        botName = `${botName}@${botName}`
    }

    // check if message contains the botTag at the beginning
    for (let i=0; i < currentBot.tag.length; i++) {
        if (message[i] == currentBot.tag[i]) {
            continue
        } else {
            valid = false
            break
        }
    }

    // If the bot is sendin the message, then valid is false
    if (botName == username) {
        valid = false
    }

    if (valid) {
        let command = message.substring(currentBot.tag.length).trim().split(' ')[0]
        let content = {
            message: message.substring(currentBot.tag.length).trim().split(' ')[1],
            username: username
        }

        cmdManager.bindCommand(command, content)
    }
}
