const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');

const next = require('next');
const nextApp = next(true);
const express = require('express');
const handle = nextApp.getRequestHandler();
let app = express();

const port = 8000;



nextApp.prepare().then(() => {
	MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
		if (err) {
			console.log(err);
		}
		require('./routes')(app, database.db('infrawave_db'));
		app.get('*', (req, res) => {
			return handle(req, res);
		});
		app.listen(port, (err) => {
			if (err) {
				console.log(err);
			}
			console.log('Connected');
		});
	});
});