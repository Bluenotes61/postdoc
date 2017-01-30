var db = require("../helpers/database.js");
var common = require("../helpers/common.js");
var Q = require("q");


exports.index = function(req, res) {
  res.render("start", { 
    language:"en"
  });
};

