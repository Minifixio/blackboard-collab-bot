
var express = require('express')
var app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);

const commandsManager = require('./command_manager.js')
const soundCommand = require('./commands/sound.js')
var bot = require('./bot.js')

app.use(express.json())
app.use('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/', (req, res) => {
    res.redirect('/static/index.html')
})

// Starts a new BOT with name/url
app.post('/api/start', (req, res) => {
    console.log(req.body.name, req.body.url, req.body.commands)
    bot.currentBot = new bot.Bot(req.name, '!')
    commandsManager.registerCommands(req.body.commands)
    bot.currentBot.start(req.body.url)
    res.send(true)
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

app.listen(3000, function () {
    console.log('BOT server is listening on port 3000!')
})


io.on("connection", socket => {
  
    if(bot.currentBot) {
        io.emit('bot-infos', bot.currentBot)
    }
});

module.exports.socketEmit = function socketEmit(tag, content) {
    io.emit(tag, content)
}