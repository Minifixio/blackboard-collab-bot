const say = require('say')

var currentBot = require('../bot.js').currentBot
const Command = require('../models/Command.js').Command

let description = 'fait parler le BOT'

module.exports.SpeakCmd = new Command('parle', call, description, false)

async function call(content) {

    let sentence = content.username + ' a dit : ' + content.message

    say.speak(sentence, null, null, async(err) => {
        console.log(err)
        await currentBot.webdriver.sendChat('Petit problème de parole')
    })
}


this.SpeakCmd.call({username: 'Emile', message: 'yes ca marche'})