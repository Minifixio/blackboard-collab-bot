
var express = require('express')

const commandsManager = require('./command_manager.js')
const testDriver = require('./tests/test.js')
var bot = require('./bot.js')
var ms = require('mediaserver');

const pagePath = '/dashboard/html/'

var app = express()
app.use('/static', express.static(__dirname + pagePath));
app.use(express.json())
app.use('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/', (req, res) => {
    res.redirect('/static/index.html')
})

app.post('/api/start', (req, res) => {
    bot.currentBot.name = req.body.name
    bot.currentBot.start(req.body.url)
    res.send(true)
})

app.get('/api/commands', (req, res) => {
    res.json(commandsManager.commands)
})

app.get('/api/test', (req, res) => {
    var tester = new testDriver.Test('helo')
    tester.init()
    res.send(true)
})

app.get('/api/test/click', (req, res) => {
    tester.send('Hello')
    res.send(true)
})

app.listen(3000, function () {
    console.log('BOT server is listening on port 3000!')
})