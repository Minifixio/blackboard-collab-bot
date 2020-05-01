var bot = require('../bot.js')
const Command = require('../models/Command.js').Command
const httpManager = require('../http_manager')

let description = 'un meme random'
let memeUrl = 'https://api.imgflip.com/get_memes'

module.exports.MemeCmd = new Command('meme', call, description, false)

async function call(content) {

    let currentBot = bot.getBotInstance()

    try {
        var res = JSON.parse(await httpManager.get(memeUrl))

        if (res.data.memes) {
            res = res.data.memes
        } else {
            await currentBot.webdriver.sendChat('Petit problème pour trouver des memes')
            return false
        }

        let memeId = Math.floor((Math.random() * res.length))
        let meme = res[memeId]

        await currentBot.webdriver.sendChat('Voici une petit meme croustillant ' + meme.url)
    } catch(e) {
        await currentBot.webdriver.sendChat('Petit problème pour trouver des memes')
    }
}
