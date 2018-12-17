const songRoutes = require('./song_routes');

module.exports = function(app, db) {
	songRoutes(app, db);
}