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

export default App