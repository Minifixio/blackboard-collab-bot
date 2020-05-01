var bot = require('../bot.js')
const mathjs = require('mathjs')
const Command = require('../models/Command.js').Command

let description = 'executer des calculs'

module.exports.MathCmd = new Command('math', call, description, false)

async function call(content) {

    let currentBot = bot.getBotInstance()
    
    try {
        let result = mathjs.evaluate(content.message)
        await currentBot.webdriver.sendChat(String(result))
    } catch(e) {
        await currentBot.webdriver.sendChat('Veuillez rentrer une expression correcte')
    }
}