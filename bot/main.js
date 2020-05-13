
var express = require('express')
var app = express()
//const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

const commandsManager = require('./command_manager.js')
const soundCommand = require('./commands/sound.js')
const drawCommand = require('./commands/draw.js')
const speakCommand = require('./commands/speak.js')
var bot = require('./bot.js')

app.use(express.json())
app.use(cors())
app.use('/static', express.static('files'));
app.use(express.static('dist'));

app.all("/*", function(req, res){
    res.sendFile("index.html", { root: __dirname + "/dist"});
});

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Starts a new BOT with name/url
app.post('/api/start', (req, res) => {
    bot.initBot(req.body.name, '!')
    commandsManager.registerCommands(req.body.commands)
    let started = bot.connectBot(req.body.url)

    res.send(started)
})

// Let the user select the mic input
app.post('/api/mic-option', async(req, res) => {
    let currentBot = bot.getBotInstance()
    console.log('selected mic index :', req.body.index)
    await currentBot.webdriver.setupMic(req.body.index)
    res.send(true)
})

app.post('/api/click', (req, res) => {
    let currentBot = bot.getBotInstance()
    currentBot.webdriver.mouseClick(req.body.x, req.body.y)
    res.send(true)
})

// Kill current bot
app.get('/api/disconnect', async(req, res) => {
    console.log('kill')
    await bot.killBot()
    res.send(true)
})

// Get current bot
app.get('/api/bot', (req, res) => {
    res.json(bot.getBotInfos())
})

// Get the list of commands
app.get('/api/commands', (req, res) => {
    res.json(commandsManager.commands)
})

// Get the list of sounds
app.get('/api/sounds', (req, res) => {
    res.json(soundCommand.sounds)
})

// Get the list of sounds
app.get('/api/drawings', (req, res) => {
    res.json(drawCommand.imgs)
})

// Take a screenshot
app.get('/api/screenshot', async(req, res) => {
    let currentBot = bot.getBotInstance()

    if (currentBot) {
        await currentBot.webdriver.screenshot()
    }

    res.send(true)
})

app.post('/api/sound', async(req, res) => {
    let botInfos = bot.getBotInfos()

    if (botInfos != null) {
        let soundPlayed = await soundCommand.SoundCmd.call({message: req.body.name})
        res.json(soundPlayed) // true if the sound played correctly, false otherwise
    } else {
        res.send(false)
    }

})

app.post('/api/draw', async(req, res) => {
    let botInfos = bot.getBotInfos()
    if (botInfos != null) {
        let drawing = await drawCommand.DrawCmd.call({message: req.body.name})
        res.json(drawing) // true if the drawing is available, false otherwise
    } else {
        res.send(false)
    }
})

app.post('/api/text', async(req, res) => {
    let currentBot = bot.getBotInstance()

    if (currentBot) {
        let msgSent = await currentBot.webdriver.sendChat(req.body.message)

        if (msgSent) {
            res.send(true)
        } else {
            res.send(false)
        }

    } else {
        res.send(false)
    }
})

app.post('/api/speak', async(req, res) => {
    let botInfos = bot.getBotInfos()

    if (botInfos != null) {
        let speech = await speakCommand.SpeakCmd.call(req.body)
        res.json(speech) // true if the mic is available, false otherwise
    } else {
        res.send(false)
    }
})

http.listen(3000, function () {
    console.log('BOT API is listening on port 3000!')
})

io.on("connection", socket => {

});

function socketEmit(tag, message, content) {
    io.emit(tag, {
        message: message,
        content: content
    })
}

module.exports.socketEmit = socketEmit