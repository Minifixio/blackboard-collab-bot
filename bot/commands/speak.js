const say = require('say')

var currentBot = require('../bot.js').currentBot
const Command = require('../models/Command.js').Command

let description = 'fait parler le BOT'

module.exports.SpeakCmd = new Command('parle', call, description, false)

// TODO : Turn on mic
async function call(content) {

    var micClass = await page.evaluate(() => {
        return document.querySelector("#mic-enable").className
    })

    if (!micClass.includes('active')) {
        await page.click('#raise-hand')
        await page.click('#mic-enable')
    }

    let sentence = content.username + ' a dit : ' + content.message

    say.speak(sentence, null, null, async(err) => {
        if (err) {
            await currentBot.webdriver.sendChat('Petit problème de parole')
        }
    })
}