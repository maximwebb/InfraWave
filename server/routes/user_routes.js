let ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	app.post('/server/add_user', (req, res) => {
		const details = {
			'username': req.body.username,
			'password': req.body.password,
			'salt': req.body.salt
		};
		db.collection('users').insertOne(details, (err, result) => {
			if (err) {
				res.send({'error': err});
			}
			else {
				res.send('Added user.');
			}
		});
	});

	app.post('/server/login', (req, res) => {

	});

	app.get('/server/fetch_all_users', (req, res) => {
		db.collection('users').find({}).toArray((err, docs) => {
			if (err) {
				res.send({'error': err});
			}
			else {
				res.send(docs);
			}
		});
	});

	app.put('/server/update_password', (req, res) => {

	});

};