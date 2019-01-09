import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import {Title} from './components/title'
import Textbox from './components/textbox'
import EmailInput from './components/email_input'

export default class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="white-text-darken-3">
				<Header />
				<Navbar />
				<div className="" id={"section-1"}>
					<div className={"container"}>
						<Title text={"Welcome to InfraWave"} />
						<div className={"row"}>
							<div className={"col s10 offset-s1"} style={{paddingBottom: 80+ 'px', borderRadius: 25 + 'px'}}>
								<div className={"row center"}>
									<div className={"col s10 offset-s1"}>
										<Textbox text={"InfraWave provides the tools you need to organise, manage and play your favourite music."} />
									</div>
								</div>
								<div className={"row center"} >
									<br />
									<div className={"col s10 offset-s1 card white"} style={{padding: 20 + 'px', borderRadius: 50 + 'px'}}>
										<EmailInput id={"welcome"} type={"email"} button={true} />
									</div>
								</div>
							</div>
						</div>

						<div className={"row center"}>
							<div className={""}><a className={"btn-floating btn-large teal waves-effect waves-light"}><i className={"material-icons"}>expand_more</i></a></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}