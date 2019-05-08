exports.index = function (req, res) {
  var lang = req.session.language || 'sv'
  res.render('start', {
    language: lang
  })
}

exports.setLanguage = function (req, res) {
  req.session.language = req.body.language
  res.json({})
}
