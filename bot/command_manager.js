const HelpCmd = require('./commands/help.js').HelpCmd
const TraduceCmd = require('./commands/traduce.js').TraduceCmd
const DrawCmd = require('./commands/draw.js').DrawCmd
const MemeCmd = require('./commands/meme.js').MemeCmd
const CatCmd = require('./commands/cat.js').CatCmd
const MathCmd = require('./commands/math.js').MathCmd
const SpeakCmd = require('./commands/speak.js').SpeakCmd
const SoundCmd = require('./commands/sound.js').SoundCmd

const currentBot = require('./bot.js').currentBot

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

    // Searching for the corresponding command
    let command = commands.find(el => el.name == commandName)

    if (command) {
        if (command.activated) {
            await command.call(content)
        } else {
            await currentBot.webdriver.sendChat("Désolé cette commande n'est activée par l'administrateur")
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
            if (commandList.find(cmd => cmd.name == command.name).activated == true) {
                command.activated = true
            }
        })  
    }
}

function addCommand() {

}

function removeCommand() {

}

module.exports.commands = commands;