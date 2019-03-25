import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import Toolbar from './components/toolbar'
import { Title, Subheading } from './components/title'
import LoginForm from './components/login_form'
import 'isomorphic-unfetch'

export default class Login extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
				<Header />
				<Navbar />
				<div className={'container'}>
					<div className={'row center'}>
						<br />
						<br />
						<div className={'col xl6 offset-xl3'}>
							<LoginForm />
						</div>
						<br />
					</div>
				</div>
			</div>
		)
	}
}