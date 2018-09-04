var express = require('express');
var str = require('../static/scripts/str');

var router = express.Router();


router.get('/', function(req, res, next) {
	let pagePath, pageName;
	const urlPath = str.removeFirstLetter(req._parsedOriginalUrl.path);
	/* Assigns path & title, defaults to original URL path */

	if (urlPath === '') {
		pagePath = 'index';
		pageName = 'home';
	}
	else if (urlPath === '/songs') {
		pagePath = 'songs';
		pageName = 'songs';
	}
	else {
		pagePath = pageName = urlPath;
	}

	res.render(pagePath, { title: str.toProperCase(pageName) });
});

module.exports = router;
