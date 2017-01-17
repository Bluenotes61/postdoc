/**
 * Database definition
 * @module server/helpers/database
 * @mixes nodebase/helpers/database
 * @requires module:server/config
 * @requires module:server/helpers/common
 * @requires module:server/helpers/dbupdate
 * @requires module:nodebase/helpers/database
 */

var Sequelize = require("sequelize");
var Q = require("q");    
var config = require("../config.js");  
var dbupdates = require("./dbupdates.js");  
var dbnodebase = require("../nodebase/helpers/database.js");  
var common = require("./common.js");  
var db = this;


/**
 * Inherit everything from nodebase/helpers/database
 */
for (objkey in dbnodebase) {
  exports[objkey] = dbnodebase[objkey];
}

/** */
exports.Webpage = this.sequelize.define('webpage', {
  id : { type:Sequelize.STRING, primaryKey:true},
  name : { type : Sequelize.STRING }
},{
});



/**
 * Call associate method for all schemes
 */
exports.associate = function() {
  Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
      db[modelName].associate();
    }
  });
}


/**
 * If config.application.updateDatabase is set the database is checked for updates.
 */
db.associate();
if (config.application.updateDatabase) {
  dbupdates.update().then(
    function() {
      console.log("Application database updated");
    },
    function(err) {
      common.logError(null, err);
    }
  )
}
