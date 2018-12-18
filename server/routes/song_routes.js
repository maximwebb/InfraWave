var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	app.get('/server/get_song', (req, res) => {
		//const details = { '_id': new ObjectID(req.params.id) };

		db.collection('songs').findOne({}, (err, docs) => {
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
		//const song = { 'title': req.body.title, 'description': req.body.description };
		const song = { 'title': 'Beserk', 'description': 'Song by eminem.'};
		db.collection('songs').insertOne(song, (err, result) => {
			if (err) {
				res.send({ 'error': err });
			}
			else {
				console.log(result.ops[0]);
				res.send('Song successfully added.');
			}
		})
	});
};