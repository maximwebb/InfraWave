import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import { Title, Subheading } from './components/title'
import AddSongForm from './components/add_song_form'
import SongCard from './components/card'
import fetch from 'isomorphic-unfetch'

export default class Songs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Click me!'
		}
		this.sayHi = this.sayHi.bind(this);
	}

	static async getInitialProps() {
		const res = await fetch('http://localhost:3000/server/fetch_all_songs');
		const data = await res.json();

		return {
			songs: data
		}
	}

	sayHi() {
		this.setState({
			text: 'hello'
		})
	}

	animate() {
		this.setState({

		})
	}

	render() {
		return (
			<div>
				<Header />
				<Navbar />
				<div className={"container"}>
					<Title text={"Songs"} />
					<div className={"row center card-container"}>
						{
							this.props.songs.map((song) => {
								return <SongCard title={song.title} text={song.description} key={song._id}> </SongCard>
							})
						}
					</div>
					<div className={"row center card"}>
						<AddSongForm />
					</div>
					<button className={"btn waves-effect waves-light"} id={"btn"} onClick={this.sayHi}>{this.state.text}</button>
				</div>
			</div>
		);
	}
}