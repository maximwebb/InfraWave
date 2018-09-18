import Navbar from './includes/navbar'
import Header from './includes/header'
import Textbox from './components/textbox'
import Title from './components/title'

const App = () => (
	<div className="blue-grey darken-4 white-text">
		<Header />
		<Navbar />
		<div className="container">
			<Title text={"Welcome to InfraWave"} />
			<Textbox text={"InfraWave provides all the tools you could need for organising, managing and playing your favourite music."} />
		</div>
	</div>
);

function changeFavicon() {

	//fav.href = "https://cdn.discordapp.com/emojis/287331251780845569.png";
	if (!document.querySelectorAll('link[rel=icon]')[0]) {
		let fav = document.createElement("link");
		fav.rel = "icon";
		fav.href = "/static/images/logo.ico";
		document.getElementsByTagName('head')[0].appendChild(fav);
		console.log('foo');
	}
}

console.log('foo');

const Favicon = () => (
	<link rel = "shortcut icon" href = "https://cdn.discordapp.com/emojis/287331251780845569.png" type="image/x-icon" />
)




export default App