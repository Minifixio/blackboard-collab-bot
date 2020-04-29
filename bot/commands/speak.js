var currentBot = require('../bot.js').currentBot
const Command = require('../models/Command.js').Command

let description = 'diffuser un son'

module.exports.SpeakCmd = new Command('parle', call, description, false)

async function call(content) {
    await currentBot.webdriver.playAudio()
}