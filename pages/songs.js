import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import { Title, Subheading } from './components/title'
import SongCard from './components/card'
import Icon from "./components/icon";
import 'isomorphic-unfetch';

export default class Songs extends React.Component {
	constructor(props) {
		super(props);
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

	static async addSong(details) {
		console.log('asdf');
		return fetch('http://localhost:3000/server/add_song', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: 'title=' + encodeURIComponent(details.title) + '&artist=' + encodeURIComponent(details.artist) + '&link=' + encodeURIComponent(details.link)
		}).then((response) => {
			this.fetchAllSongs();
		});
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
								return <SongCard title={song.title} artist={song.artist} link={song.link} key={song._id}> </SongCard>
							})
						}
					</div>
					<div className={"row center card"}>
						<AddSongForm />
					</div>
					<button className={"btn waves-effect waves-light"} id={"btn"} onClick={Songs.addSong}>Click me</button>
				</div>
			</div>
		);
	}
}

class AddSongForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {songName: '', artistName: '', songLink: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		if (event.target.id === 'song-name') {
			this.setState({ songName: event.target.value });
		}
		else if (event.target.id === 'artist-name') {
			this.setState({ artistName: event.target.value });
		}
		else if (event.target.id === 'song-link') {
			this.setState({ songLink: event.target.value });
		}
	}

	handleSubmit(event) {
		let details = {
			title: this.state.songName,
			artist: this.state.artistName,
			link: this.state.songLink
		};
		console.log(this.state.songName + ' - song by ' + this.state.artistName + ' . Link: ' + this.state.songLink);
		Songs.addSong(details);
		event.preventDefault();
	}

	render() {
		return (
			<form className={"center"} onSubmit={this.handleSubmit}>
				<div className={"input-field col s4 offset-s1"}>
					<input id={"song-name"} type={"text"} onChange={this.handleChange}/>
					<label htmlFor={"song-name"}>Song name</label>
				</div>
				<div className={"input-field col s4 offset-s1"}>
					<input id={"artist-name"} type={"text"} onChange={this.handleChange}/>
					<label htmlFor={"artist-name"}>Artist</label>
				</div>
				<div className={"input-field col s4 offset-s1"}>
					<input id={"song-link"} type={"text"} onChange={this.handleChange}/>
					<label htmlFor={"song-link"}>Link</label>
				</div>

				<div className={"input-field col s2"}>
					<button className={"btn waves-effect waves-light"} type={"submit"} value={"Submit"}>Submit
						<Icon text={"send"} />
					</button>
				</div>
			</form>
		);
	}
}