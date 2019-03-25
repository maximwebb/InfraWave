import React from 'react'
import { Title, Subheading } from './title'
import 'isomorphic-unfetch'

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={'card blue darken-3'}>
				<Title text={'Login'}/>
				<br />
				<br />
				<div className={'input-field col s8'}>
					<input id={'username'} type={'text'} className={'validate'} />
					<label htmlFor={'username'}>Username</label>
				</div>
				<div className={'input-field col s8'}>
					<input id={'password'} type={'password'} className={'validate'}/>
					<label htmlFor={'password'}>Password</label>
				</div>
			</div>
		)
	}
}