var currentBot = require('../bot.js').currentBot
var commandsManager = require('../command_manager.js')
const Command = require('../models/Command.js').Command

let description = 'avoir la liste des commandes'

module.exports.HelpCmd = new Command('aide', call, description, false)

async function call(content) {
    await currentBot.webdriver.sendChat('Voici les commandes disponibles')
    
    for (let command of commandsManager.commands) {
        await currentBot.webdriver.sendChat(`> ${currentBot.tag}${command.name} ${command.description}`)
    }
}