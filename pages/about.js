import Header from './includes/header'
import Navbar from './includes/navbar'
import {Title} from './components/title'

export default class About extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
		this.incrementCounter = this.incrementCounter.bind(this);
	}

	incrementCounter() {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		return (
			<div>
				<Header />
				<Navbar />
				<div className="container">
					<Title text={"About InfraWave"} />
					<p>Count: {this.state.count} </p>
				</div>
				<Foo count={this.state.count} incrementCounter={this.incrementCounter} />
			</div>
		);
	}
}

class Foo extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<button onClick={this.props.incrementCounter} >Hello</button>
			</div>
		)
	}
}
