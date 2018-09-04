/* A series of common string methods. */

module.exports = {
	toProperCase: function (string) {
		let strArr = string.split('');
		strArr[0] = strArr[0].toUpperCase();
		return strArr.join('');
	},
	removeFirstLetter: function(string) {
		return string.substr(1, string.length - 1);
	}
};
