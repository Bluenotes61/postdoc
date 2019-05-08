var express = require('express')
var router = express.Router()

var file = require('./routes/start')
router.get('/', file.index)
router.post('/setlanguage', file.setLanguage)

module.exports = router
