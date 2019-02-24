let ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	app.get('/server/fetch_all_songs', (req, res) => {
		db.collection('songs').find({}).toArray((err, docs) => {
			if (err) {
				res.send({ 'error': err });
			}
			else {
				res.send(docs);
			}
		});
	});

	app.post('/server/add_song', (req, res) => {
		const song = { 'title': req.body.title, 'artist': req.body.artist, 'link': req.body.link, 'duration': req.body.duration, 'thumbnail': req.body.thumbnail };
		console.log(song);
		db.collection('songs').insertOne(song, (err, result) => {
			if (err) {
				res.send({ 'error': err });
			}
			else {
				res.send('Song successfully added.');
			}
		})
	});
};