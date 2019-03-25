function encodeMessage(unencodedText) {
	return unencodedText.split('').map((el) => decToBin(el.charCodeAt(), '', 2)).join('');
}

function decodeMessage(encodedText) {
	//Split input into array of bytes
	let splitText = encodedText.match(/(.|[\r\n]){1,8}/g);
	return splitText.map((el) => String.fromCharCode(parseInt(el, 2))).join('');
}

function decToBin(n) {
	let num = (n).toString(2);
	num = '0'.repeat(8 - num.length) + num;
	return num;
}

function md5(plaintext) {
	let f = (x, y, z) => ( (x & y) | (~x & z) );
	let g = (x, y, z) => ( (x & y) | (y & ~z) );
	let h = (x, y, z) => (x ^ y ^ z);
	let i = (x, y, z) => (y ^ (x | ~z));

	let fText = formatText(plaintext);
	let constArr = [...Array(64)].map((_, i) => ('0x' + Math.floor(4294967296 * Math.abs(Math.sin(i + 1))).toString(16)));

	for (let block = 0; block < fText.length / 512; block++) {

	}
	return 0;
}

function formatText(text) {
	let fText = encodeMessage(text);
	let len = fText.length.toString(2);
	len = '0'.repeat(64 - len.length) + len;
	fText += '1';
	fText += '0'.repeat(448 - fText.length % 512);
	return fText + len;
}

process.stdin.on('readable', () => {
	let chunk;
	while ((chunk = process.stdin.read()) !== null) {
		let k = decodeMessage('' + chunk);
		process.stdout.write(k);
	}
});

let str = 'good morning, how is everyone doing today?';
let str1 = formatText(str);
md5('f');
console.log(str1);