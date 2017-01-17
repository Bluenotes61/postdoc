/**
 * Module containtng common server functionality
 * @module server/helpers/common
 * @mixes nodebase/helpers/common
 * @requires module:server/helpers/database
 */

var db = require("./database.js"); 
var commonnodebase = require("../nodebase/helpers/common.js")
var Q = require("q");
var common = this;


/**
 * Inherit everything from nodebase/helpers/common
 */
for (objkey in commonnodebase) {
  exports[objkey] = commonnodebase[objkey];
}


/**
 * Return week number for current date
 * @return {int} Week number
 */
exports.getCurrWeekNumber = function(){
  var d = new Date(); 
  d.setHours(0,0,0);
  d.setDate(d.getDate()+4-(d.getDay()||7));
  return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
};



/**
 * Return translations for the given language
 * @param  {string} lang Language
 * @return {Promise} Resolves to an object like {'Datum':'Date', 'Telefon':'Phone', ...}
 */
exports.getTranslations = function(lang) {
  var d = Q.defer();
  lang = lang || 'sv';
  db.Translation.findAll({
    attributes: ["sv", lang]
  }).then(
    function(rows){
      var trans = {};
      for (var i=0; i < rows.length; i++)  
        trans[rows[i].sv] = rows[i][lang];
      d.resolve(trans);
    },
    function(err) {
      d.reject(err);
    }
  );
  return d.promise;
}
