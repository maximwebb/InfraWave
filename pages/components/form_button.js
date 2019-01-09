import React from 'react'

export default class FormButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: ''
		};
		this.animate = this.animate.bind(this)
	}

	animate(props) {
		if (this.state.type === 'open-button') {
			this.setState({
				type: 'closed-button'
			})
		}
		else {
			this.setState({
				type: 'open-button'
			})
		}
	}

	render() {
		return (
			<div className={this.state.type} id={"add-song-button"} onClick={this.animate}>
				<i className={"material-icons"}>add</i>
			</div>
		);
	}
}