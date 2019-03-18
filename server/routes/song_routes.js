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
		const song = { 'title': req.body.title,
			'artist': req.body.artist,
			'link': req.body.link,
			'duration': req.body.duration,
			'thumbnail': req.body.thumbnail };

		db.collection('songs').insertOne(song, (err, result) => {
			if (err) {
				res.send({ 'error': err });
			}
			else {
				res.send('Song successfully added.');
			}
		});
	});

	app.put('/server/update_song/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };

		//* Checks if keys in search request are valid, and if so, constructs song object. */
		let song = {};
		let parameters = ['title', 'artist', 'link', 'duration', 'thumbnail'];
		for (let i of Object.keys(req.body)) {
			if (parameters.find((param) => { return i === param })) {
				song[i] = req.body[i];
			}
		}

		db.collection('songs').updateOne(details, { $set: song }, (err, result) => {
			if (err) {
				res.send(err);
			}
			else {
				res.send('Song successfully updated');
			}
		});
	});

	app.delete('/server/delete_song', (req, res) => {
		const IDList = req.query.id.split(`,`);
		//const IDList = ["5c7700ca165e5e12f42070e1", "5c7700a5165e5e12f42070e0"];
		const objectIDList = IDList.map((id) => (new ObjectID(id)));
		console.log(objectIDList);
		db.collection('songs').deleteMany({'_id': {$in:objectIDList}}, (err, result) => {
			if (err) {
				res.send(err);
			}
			else {
				res.send(`Song(s) successfully deleted.`);
			}
		});
	})
};