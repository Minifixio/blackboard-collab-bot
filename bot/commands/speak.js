const say = require('say')

var bot = require('../bot.js')
const Command = require('../models/Command.js').Command

let description = 'fait parler le BOT'

var SpeakCmd = new Command('parle', call, description, false)
module.exports.SpeakCmd = SpeakCmd

// TODO : Turn on mic
async function call(content) {

    try {
        let currentBot = bot.getBotInstance()
        let page = currentBot.webdriver.page
        
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
                
                if (content.username != bot.name) {
                    await currentBot.webdriver.sendChat('Petit problème de parole')
                }
    
                return false
            }
        })
    
        return true

    } catch(e) {
        return false
    }
}