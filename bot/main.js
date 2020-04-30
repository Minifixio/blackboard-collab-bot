
var express = require('express')
var app = express()
//const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

const commandsManager = require('./command_manager.js')
const soundCommand = require('./commands/sound.js')
var bot = require('./bot.js')

app.use(express.json())
app.use(cors())
app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.redirect('/static/index.html')
})

// Starts a new BOT with name/url
app.post('/api/start', (req, res) => {
    bot.initBot(req.body.name, '!')
    commandsManager.registerCommands(req.body.commands)
    bot.connectBot(req.body.url)

    res.send(true)
})

// Get current bot
app.get('/api/bot', (req, res) => {
    console.log(bot.getBot())
    res.json(bot.getBot())
})

// Get the list of commands
app.get('/api/commands', (req, res) => {
    res.json(commandsManager.commands)
})

// Get the list of sounds
app.get('/api/sounds', (req, res) => {
    res.json(soundCommand.sounds)
})

app.get('/api/play-sound', async(req, res) => {
    let soundPlayed = await soundCommand.SoundCmd.call({message: req.body.name})

    if (soundPlayed) {
        res.json(true)
    } else {
        res.json(false)
    }
})

http.listen(3000, function () {
    console.log('BOT API is listening on port 3000!')
})

io.on("connection", socket => {

});

function socketEmit(tag, content) {
    io.emit(tag, content)
}

module.exports.socketEmit = socketEmit