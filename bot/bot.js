var webdriver = require('./webdriver.js')
var command_manager = require('./command_manager.js')
const testing = true;

var currentBot

class Bot {

    constructor(name, tag) {
        this.name = name

        if (tag) {
            this.tag = tag
        } else {
            // The tag is used as the pattern to call the bot functions
            this.tag = '!'
        }

        this.testing = testing
        this.connected = false;
    }

    async start(url) {

        this.url = url

        if (testing) {
            this.webdriver = new webdriver.WebBrowser('http://collaborate.blackboard.com/go?CTID=d83e9915-9912-42a5-b54f-289b3e310135G', 'BOTEST', this.tag, this)

            try {
                await this.webdriver.initForTest()
                this.connected = true
                return true
            } catch(e) {
                console.log('error while connecting')
                return false
            }
        }

        // If the browser already exists
        if (this.webdriver) {
            await this.webdriver.gotTo(url)
        } else {
            this.webdriver = new webdriver.WebBrowser(url, this.name, this.tag, this)

            try {
                await this.webdriver.init()
                await this.webdriver.connectToClass()
                this.connected = true
                return true
            } catch(e) {
                console.log('error while connecting')
                return false
            }
        }
    }
}

module.exports.initBot = function initBot(name, tag) {
    currentBot = new Bot(name, tag)
}

module.exports.connectBot = async function connectBot(url) {
    let started = await currentBot.start(url)
    return started
}

module.exports.killBot = async function killBot() {
    console.log('killing bot')
    await currentBot.webdriver.kill()
    currentBot = null;
}

module.exports.getBotInfos = function getBotInfos() {

    if (currentBot) {
        return {
            name: currentBot.name,
            tag: currentBot.tag,
            url: currentBot.url,
            connected: currentBot.connected,
            testing: currentBot.testing
        }
    } else {
        return null
    }
}

module.exports.getBotInstance = function getBotInstance() {
    return currentBot
}

module.exports.currentBot = currentBot
