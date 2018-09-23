import React from 'react'
import jQuery from 'jquery'
import Header from './includes/header'
import Navbar from './includes/navbar'
import Title from './components/title'
import Textbox from './components/textbox'
import EmailInput from './components/email-input'
import Clock from './components/clock'

const App = () => (
	<div className="blue-grey darken-4 white-text">
		<Header />
		<Navbar />
		<div className="container">

			<Title text={"Welcome to InfraWave"} />
			<br />
			<div className={"row"}>
				<div className={"card blue-grey lighten-1 col s10 offset-s1"} style={{paddingBottom: 80+ 'px', borderRadius: 25 + 'px'}}>
					<div className={"row center"}>
						<div className={"col s10 offset-s1"}>
							<Textbox text={"InfraWave provides the tools you need to organise, manage and playing your favourite music."} />
						</div>
					</div>
					<div className={"row center"} >
						<br />
						<div className={"col s10 offset-s1 card white"} style={{padding: 20 + 'px', borderRadius: 50 + 'px'}}>
							<EmailInput id={"welcome"} type={"email"} button={true} />
						</div>
					</div>
					<Clock />
				</div>
			</div>
		</div>
	</div>
);

export default App