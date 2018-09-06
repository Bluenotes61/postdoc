/**
 * Functionality for updating the database.
 * Activated only when developing if config.application.initNodebase is set
 * @module server/helpers/dbupdate
 * @mixes nodebase/helpers/dbupdate
 * @requires module:server/helpers/database
 * @requires module:nodebase/helpers/dbupdates
*/

var db = require("./database.js"); 
//var dbnodeupdates = require("../nodebase/helpers/dbupdates.js"); 
var Q = require("q");

/**
 * Updates to the database are made if missing updates are found
 */
exports.update = function() {
  return Q();
/*  var d = Q.defer();
  db.sequelize.sync().then(function(){
    return dbnodeupdates.update();
  }).then(function(){
    var updates = [
      addRequests,
    ];
    var promise = Q();
    updates.forEach(function (f) {
      promise = promise.then(f);
    });
    return promise;
  }).then(
    function(){
      d.resolve();
    },
    function(err) {
      d.reject(err);
    }
  );
  return d.promise;
*/}

/**
 * Adds the request /nodebase/roles
 */
function addRequests() {
  return Q();
/*  var promises = [
    dbnodeupdates.addOneRequest({url: '/', method:'get', type:'', pagetitle:'Postdoc', srcfile:'routes/start', srcfunction:'index'}, [])
  ];
  return Q.all(promises)
*/}
