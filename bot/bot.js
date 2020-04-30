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

        if (testing) {
            this.startForTest('http://collaborate.blackboard.com/go?CTID=d83e9915-9912-42a5-b54f-289b3e310135G')
        }
    }

    async startForTest(url) {
        this.webdriver = new webdriver.WebBrowser(url, 'BOTEST', this.tag, this)
        await this.webdriver.initForTest()
    }

    async start(url) {

        // If the browser already exists
        if (this.webdriver.browser) {
            await this.webdriver.gotTo(url)
        } else {
            this.webdriver = new webdriver.WebBrowser(url, this.name, this.tag, this)
            await this.webdriver.init()
        }
    }
}

module.exports.currentBot = currentBot
module.exports.Bot = Bot
