var currentBot = require('../bot.js').currentBot
const Command = require('../models/Command.js').Command

let description = 'traduire un texte'

module.exports.TraduceCmd = new Command('traduire', call, description, false)

async function call(content) {}