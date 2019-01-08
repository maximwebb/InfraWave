let ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	app.get('/server/fetch_all_songs', (req, res) => {
		db.collection('songs').find({}).toArray((err, docs) => {
			if (err) {
				res.send({ 'error': err });
			}
			else {
				console.log(docs);
				res.send(docs);
			}
		});
	});

	app.post('/server/add_song', (req, res) => {
		console.log(req.body.title);
		res.send('thanks');

		//const song = { 'title': 'Beserk', 'description': 'Song by eminem.'};
		// db.collection('songs').insertOne(song, (err, result) => {
		// 	if (err) {
		// 		res.send({ 'error': err });
		// 	}
		// 	else {
		// 		console.log(result.ops[0]);
		// 		res.send('Song successfully added.');
		// 	}
		// })
	});
};