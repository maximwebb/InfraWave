import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import { Title, Subheading } from './components/title'
import AddSongForm from './components/add_song_form'
import SongCard from './components/card'

export default class Songs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Click me!'
		}
		this.sayHi = this.sayHi.bind(this);
		//this.fetchAllSongs = this.fetchAllSongs.bind(this);
	}

	static getInitialProps() {
		return this.fetchAllSongs();
	}

	static async fetchAllSongs() {
		const res = await fetch('http://localhost:3000/server/fetch_all_songs');
		const data = await res.json();
		return {
			songs: data
		}
	}

	async addSong(details) {
		console.log('asdf');
		return fetch('http://localhost:3000/server/add_song', {
			method: 'POST',
			mode: 'same-origin',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/x-wwww-form-urlencoded'
			},
			redirect: 'follow',
			referrer: 'no-referrer',
			body: 'title=So%20Bad&description=This%20is%20another%20song.'
		}).then((response) => {
			console.log(response);
		});
	}

	sayHi() {
		this.setState({
			text: 'hello'
		})
	}

	render() {
		return (
			<div>
				<Header />
				<Navbar />
				<div className={"container"}>
					<Title text={"Songs"} />
					<div className={"card-container"}>
						{
							this.props.songs.map((song) => {
								return <SongCard title={song.title} text={song.description} key={song._id}> </SongCard>
							})
						}
					</div>
					<div className={"row center card"}>
						<AddSongForm />
					</div>
					<button className={"btn waves-effect waves-light"} id={"btn"} onClick={this.addSong}>{this.state.text}</button>
				</div>
			</div>
		);
	}
}