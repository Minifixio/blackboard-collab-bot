const fs = require('fs')
const path = require('path')
var player = require('play-sound')(opts = {})
var bot = require('../bot.js')

let description = 'joue un son'
let soundsPath = '../files/sounds/'

const Command = require('../models/Command.js').Command

var SoundCmd = new Command('son', call, description, false)
module.exports.SoundCmd = SoundCmd

var sounds = []
module.exports.sounds = sounds


function initSounds() {
    let soundFiles = fs.readdirSync(path.resolve(__dirname, soundsPath)).filter(file => { 
        if(file.includes('.mp3') || file.includes('.wav')) {
            return file
        }
    })

    soundFiles.forEach(file => sounds.push({
        name: file.split('.')[0],
        path: `${soundsPath}${file}`
    }))
}

initSounds()

async function call(content) {

    let currentBot = bot.getBotInstance()

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

    return true
}

module.exports.playConnextionSound = function playConnextionSound() {
    player.play(path.resolve(__dirname, '../files/others/beep_connection.mp3'))
}