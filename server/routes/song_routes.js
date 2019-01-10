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
		console.log('POST request received');
		const song = { 'title': 'Blame it on the Boogie', 'description': 'Song by Michael Jackson'};
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