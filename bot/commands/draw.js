const fs = require('fs')
const path = require('path');
var bot = require('../bot.js')
const Command = require('../models/Command.js').Command
let imgPath = '../models/drawings/'

let description = 'dessiner sur le tableau (faire !dessine pour voir les desisns disponibles)'
let drawer = null

var DrawCmd = new Command('dessine', call, description, false)
module.exports.DrawCmd = DrawCmd

var imgs = [
    {name: 'thug', path: `${imgPath}thug_glasses.json`},
    {name: 'loutre', path: `${imgPath}meerkat.json`},
    {name: 'trollface', path: `${imgPath}troll.json`},
    {name: 'superzizi', path: `${imgPath}nsfw.json`},
    {name: 'zizi', path: `${imgPath}dicky.json`},
]

async function call(content) {
    
    let currentBot = bot.getBotInstance()
    let desiredImg = imgs.find(img => img.name == content.message)

    if (!desiredImg) {
        await currentBot.webdriver.sendChat('Voici les dessins disponibles')

        for (let img of imgs) {
            await currentBot.webdriver.sendChat('> ' + currentBot.tag + DrawCmd.name + ' ' + img.name)
        }
    } else {

        if (drawer == null) {
            var imagePoints = JSON.parse(fs.readFileSync(path.resolve(__dirname, desiredImg.path)))
            drawer = new Drawer()
            await drawer.draw(imagePoints, currentBot)
            drawer = null
        } else {
            await currentBot.webdriver.sendChat('Attends un peu que je finisse mon dessin !')
        }
    }

}

class Drawer {

    // TODO : Check if the drawing is available
    async draw(points, currentBot) {

        var page = currentBot.webdriver.page
    
        try {
            var drawingCanvas = await page.waitForSelector('#whiteboard_container > div > div.canvas_container.paper', {tiemout: 3000})
        } catch(e) {
            await currentBot.webdriver.sendChat('Je ne peux pas dessiner sur la page actuelle !')
            return e
        }
    
        let boundingBox = await drawingCanvas.boundingBox()
        var width = boundingBox.width
        var height = boundingBox.height
        var xPos = boundingBox.x + 10
        var yPos = boundingBox.y + 10
    
        var maxPoint = [0, 0]
    
        points.forEach(point => {
            if (point[0] > maxPoint[0]) {
                maxPoint[0] = point[0]
            }
    
            if (point[1] > maxPoint[1]) {
                maxPoint[1] = point[1]
            }
        })
    
        maxPoint[0] == 0 ? maxPoint[0] = width: null
        maxPoint[1] == 0 ? maxPoint[1] = height: null
    
        let ratioX = width / maxPoint[0]
        let ratioY = height / maxPoint[1]
        var ratio = Math.min(ratioY, ratioX)
    
        points.forEach(point => {
            point[0] = Math.round(point[0] * ratio * 0.9) + xPos
            point[1] = Math.round(point[1] * ratio * 0.9) + yPos
        })
    
        /**console.log('pos', xPos, yPos)
        console.log('max X', width + xPos)
        console.log('max Y', height + yPos)
        console.log('limits', width, height)
        console.log('points', points)**/
    
        const mouse = page.mouse
        await page.click('#select-pencil')
        await mouse.move(points[0][0], points[0][1])
        await mouse.down()
        
    
        for (let i = 0; i<points.length; i++) {
    
            let dist = 0
    
            if (i > 0) {
                dist = Math.sqrt(
                    Math.pow(points[i][0] - points[i - 1][0], 2) 
                    + Math.pow(points[i][1] - points[i - 1][1], 2))
            }
    
            if (dist > 15) {
                await mouse.up()
            } else {
                await mouse.down()
            }
    
            await mouse.move(points[i][0], points[i][1], {step: 100})
    
        }
    
        await mouse.up()
    
    }
    
}
