import React from 'react'
import ReactDOM from 'react-dom'

export default class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			textColor: 'white'
		};
		this.sayHi = this.sayHi.bind(this);
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
			textColor: 'red'
		});
	}

	sayHi() {
		this.setState({
			textColor: 'green'
		});
	}

	render() {
		return (
			<div onClick={this.sayHi}>
				<h1 style={{color: this.state.textColor}}>Time: {this.state.date.toLocaleTimeString()}</h1>
			</div>
		)
	}
}