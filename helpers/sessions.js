var session = require('express-session')
var config = require('../config.js')

exports.config = session({
  secret: 'En hemlighet',
  name: config.application.name,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: config.sessions.cookieMaxAge }
})
