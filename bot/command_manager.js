var bot = require('./bot.js')

const traduceApiKey = require('./commands/translate.js').translateApiKey

var HelpCmd = require('./commands/help.js').HelpCmd
var TraduceCmd = require('./commands/translate.js').TraduceCmd
var DrawCmd = require('./commands/draw.js').DrawCmd
var MemeCmd = require('./commands/meme.js').MemeCmd
var CatCmd = require('./commands/cat.js').CatCmd
var MathCmd = require('./commands/math.js').MathCmd
var SpeakCmd = require('./commands/speak.js').SpeakCmd
var SoundCmd = require('./commands/sound.js').SoundCmd

var commands = [
    HelpCmd,
    TraduceCmd,
    DrawCmd,
    MemeCmd,
    CatCmd,
    MathCmd,
    SpeakCmd,
    SoundCmd
]

module.exports.bindCommand = async function bindCommand(commandName, content) {

    let currentBot = bot.getBotInstance()


    // Searching for the corresponding command
    let command = commands.find(el => el.name == commandName)

    if (command) {
        if (command.activated) {
            await command.call(content)
        } else {
            await currentBot.webdriver.sendChat("Désolé cette commande n'est pas activée par l'administrateur du BOT")
        }
    } else {
        await currentBot.webdriver.sendChat("Désolé cette commande n'est pas valide")
        await HelpCmd.call(content)
    }
}

module.exports.registerCommands = function registerCommands(commandList) {
    if (commandList == '*') {
        commands.forEach(command => {
            command.activated = true
        })
    } else {
        commands.forEach(command => {
            if (commandList.find(cmd => cmd.name == command.name)) {
                command.activated = true
            }
        })

        // If the user hasn't registered any API key
        if (traduceApiKey == '') {
            TraduceCmd.activated = false
        }
    }
}

function addCommand() {

}

function removeCommand() {

}

module.exports.commands = commands;