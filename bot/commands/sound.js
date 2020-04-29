var play = require('play')
const path = require('path');
var player = require('play-sound')(opts = {})

var currentBot = require('../bot.js').currentBot
const Command = require('../models/Command.js').Command

let soundsPath = '../files/sounds/'
let description = 'joue un son'

let sounds = [
    {name: 'bruh', path: `${soundsPath}bruh.mp3`},
    {name: 'pet1', path: `${soundsPath}fart1.mp3`},
    {name: 'pet2', path: `${soundsPath}fart2.mp3`},
    {name: 'yay', path: `${soundsPath}yay.mp3`},
    {name: 'yeah', path: `${soundsPath}yeah.mp3`},
]

module.exports.MemeCmd = new Command('son', call, description, false)

async function call(content) {

    let desiredSound = sounds.find(sound => sound.name == content.message)

    if (desiredSound) {
        console.log(desiredSound)
        player.play(path.resolve(__dirname, desiredSound.path))
    }
}