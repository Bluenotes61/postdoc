/**
 * Start module for the application
 * @module server/app
 */
var express = require('express')
var bodyParser = require('body-parser')
var swig = require('swig')
var routes = require('./routes.js')
var config = require('./config.js')
var session = require('./helpers/sessions.js')

var app = express()

var server = app.listen(config.serverport, function () {
  console.log('Listening on port %d', server.address().port)
})

swig.setDefaults({ autoescape: false })
app.disable('x-powered-by')
app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/routes')
app.use('/', express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session.config)
app.use(routes)
