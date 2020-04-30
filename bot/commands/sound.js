const path = require('path');
var player = require('play-sound')(opts = {})
var currentBot = require('../bot.js').currentBot

let description = 'joue un son'
let soundsPath = '../files/sounds/'

const Command = require('../models/Command.js').Command

var SoundCmd = new Command('son', call, description, false)
module.exports.SoundCmd = SoundCmd


let sounds = [
    {name: 'bruh', path: `${soundsPath}bruh.mp3`},
    {name: 'pet1', path: `${soundsPath}fart1.mp3`},
    {name: 'pet2', path: `${soundsPath}fart2.mp3`},
    {name: 'yay', path: `${soundsPath}yay.mp3`},
    {name: 'yeah', path: `${soundsPath}yeah.mp3`},
]

module.exports.sounds = sounds

async function call(content) {

    let desiredSound = sounds.find(sound => sound.name == content.message)

    if (!desiredSound) {
        await currentBot.webdriver.sendChat('Voici les sons disponibles :')

        for (let sound of sounds) {
            await currentBot.webdriver.sendChat('> ' + currentBot.tag + SoundCmd.name + ' ' + sound.name)
        }

        return false
    }

    let page = currentBot.webdriver.page

    var micClass = await page.evaluate(() => {
        return document.querySelector("#mic-enable").className
    })

    if (!micClass.includes('active')) {
        await page.click('#raise-hand')
        await page.click('#mic-enable')
    }

    player.play(path.resolve(__dirname, desiredSound.path))
}