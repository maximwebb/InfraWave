const songRoutes = require('./song_routes');
const userRoutes = require('./user_routes');

module.exports = function(app, db) {
	songRoutes(app, db);
	userRoutes(app, db);
}