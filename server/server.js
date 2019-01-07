/* NextJS */
const next = require('next');
const nextApp = next({ dev: true });
const handle = nextApp.getRequestHandler();

/* ExpressJS */
const express = require('express');

/* MongoDB */
const MongoClient = require('mongodb').MongoClient;
const dbInfo = require('./config/db');

/* Miscellaneous */
const SongMethods = require('./update_songs');
const { parse } = require('url');

const port = 3000;

//nextApp.prepare().then(() => {
nextApp.prepare();

MongoClient.connect(dbInfo.url, (err, database) => {
	const app = express();
	if (err) console.log(err);

	let db = database.db('infrawave_db');

	require('./routes')(app, db);


	app.get('/test\*', (req, res) => {
		res.send('API called.');
		return 0;
	});

	app.get('*', (req, res) => {
		const parsedUrl = parse(req.url, true);
		const { pathname, query } = parsedUrl;
		return handle(req, res, pathname);
	});

	app.listen(port, (err) => {
		if (err) throw err;
		console.log('Listening on port ' + port);
	});
});
