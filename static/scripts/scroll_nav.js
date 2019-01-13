// window.onload = function() {
// 	window.addEventListener('scroll', (e) => {
// 		console.log(e);
// 	});
// }

window.onscroll = function(e) {
	var scrollAmount = window.pageYOffset;
	if (scrollAmount) {
		document.querySelector('nav').style.boxShadow = '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)';
		document.querySelector('nav').style.backgroundColor = 'rgba(63, 81, 181, 1)';
	}
	else {
		document.querySelector('nav').style.boxShadow = 'none';
		document.querySelector('nav').style.backgroundColor = 'transparent';
	}
}