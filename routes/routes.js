var express = require('express');
var str = require('../static/scripts/str');

var router = express.Router();


router.get('/', function(req, res, next) {
	let pagePath, pageName, pageData;
	const urlPath = str.removeFirstLetter(req._parsedOriginalUrl.path);
	console.log(urlPath);

	pagePath = pageName = urlPath;

	/* Assigns custom paths & titles */
	if (urlPath === '') {
		pagePath = 'index';
		pageName = 'home';
	}
	else if (urlPath === 'songs') {
		pageData = require('../resources/music.json');
	}

	res.render(pagePath, {
		title: str.toProperCase(pageName),
		data: pageData
	});

});

module.exports = router;
