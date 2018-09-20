import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import Title from './components/title'
import Textbox from './components/textbox'
import EmailInput from './components/email-input'

const App = () => (
	<div className="blue-grey darken-4 white-text">
		<Header />
		<Navbar />
		<div className="container">
			<Title text={"Welcome to InfraWave"} />
			<br />
			<div className={"row center"}>
				<div className={"col s10 offset-s1"}>
					<Textbox text={"InfraWave provides all the tools you could need for organising, managing and playing your favourite music."} />
				</div>
			</div>
			<div className={"row center"}>
				<br />
				<EmailInput id={"welcome"} type={"email"} button={true} />
			</div>
		</div>
	</div>
);

export default App