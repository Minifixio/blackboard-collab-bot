var currentBot = require('../bot.js').currentBot
const Command = require('../models/Command.js').Command

let description = 'un meme random'

module.exports.MemeCmd = new Command('meme', call, description, false)

async function call(content) {}