const http = require('http');

module.exports = {
	addSong(song) {

	},
	getSong() {

		http.get('http://localhost:8000/server/get_song', (res) => {
			let data = '';

			res.on('data', (chunk) => {
				data += chunk;
			});

			res.on('end', () => {
				console.log(JSON.parse(data));
			})
		}).on('error', (err) => {
			console.log(err);
		})
	}
};