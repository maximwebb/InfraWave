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
const bodyParser = require('body-parser');

const port = 3000;
nextApp.prepare();

MongoClient.connect(dbInfo.url, { useNewUrlParser: true }, (err, database) => {
	if (err) console.log(err);

	const app = express();

	let db = database.db('infrawave_db');

	/* API routes located in /routes directory. */
	app.use(bodyParser.urlencoded({ extended: true }));
	require('./routes')(app, db);

	/* Test route to checking Express is functioning correctly */
	app.get('/test\*', (req, res) => {
		res.send('API called.');
		return 0;
	});

	/* NextJS serves the page by default */
	app.get('*', (req, res) => {
		const parsedUrl = parse(req.url, true);
		const { pathname, query } = parsedUrl;
		return handle(req, res, pathname);
	});

	app.listen(port, (err) => {
		if (err) throw err;
		console.log('Live at: http://localhost:' + port);
	});
});
