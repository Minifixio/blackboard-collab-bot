var currentBot = require('../bot.js').currentBot
const Command = require('../models/Command.js').Command
const httpManager = require('../http_manager')

let description = 'avoir une image de chat'
let catUrl = 'https://api.thecatapi.com/v1/images/search'

module.exports.CatCmd = new Command('chat', call, description, false)

async function call(content) {

    try {
        var res = await httpManager.get(catUrl)
        await this.currentBot.webdriver.sendChat('Voici une image de chat ' + res.url)
    } catch(e) {
        await this.currentBot.webdriver.sendChat('Je galère à trouver des chats la')
    }
}