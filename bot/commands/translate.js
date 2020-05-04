// Enter here your Google Translate API Key
// See https://github.com/eddiesigner/sketch-translate-me/wiki/Generate-a-Google-API-Key for further informations
var translateApiKey = '' 
module.exports.translateApiKey = translateApiKey

var bot = require('../bot.js')
var googleTranslate = require('google-translate')(translateApiKey);
const Command = require('../models/Command.js').Command

let description = 'traduire un texte'

module.exports.TraduceCmd = new Command('traduire', call, description, false)

async function call(content) {

    let currentBot = bot.getBotInstance()

    googleTranslate.translate(content, 'fr', 'en', function(err, translation) {

        if (err) {
            currentBot.webdriver.sendChat('Erreur lors de la tracution')
            return false
        }
        currentBot.webdriver.sendChat('Traduction : ' + translation.translatedText)
    })
}
