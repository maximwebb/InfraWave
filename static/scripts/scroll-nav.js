window.onload = function() {
	window.addEventListener('scroll', (e) => {
		console.log(e);
	});
}

window.onscroll = function(e) {
	console.log(document.body.scrollHeight)
}