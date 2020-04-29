var currentBot = require('../bot.js').currentBot
const Command = require('../models/Command.js').Command

let description = 'dessiner sur le tableau'

module.exports.DrawCmd = new Command('dessine', call, description, false)

async function call(content) {
    console.log('dessine')

    if (content == 'bite') {
        await draw(zi)
    }
    if (content == 'troll') {
        await draw(troll)
    }

}

async function draw(points) {

    var page = currentBot.webdriver.page
    var drawingCanvas = await page.$('#whiteboard_container > div > div.canvas_container.paper')
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
    ratio = Math.min(ratioY, ratioX)

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

