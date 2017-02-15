var db = require("../helpers/database.js");
var common = require("../helpers/common.js");
var Q = require("q");


exports.index = function(req, res) {
  var lang = req.session.language || 'sv';
  res.render("start", { 
    language:lang
  });
};

exports.setLanguage = function(req, res) {
  req.session.language = req.body.language;
  res.json({});
}

