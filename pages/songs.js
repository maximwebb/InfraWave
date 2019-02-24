import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import { Title, Subheading } from './components/title'
import SongCard from './components/card'
import Icon from "./components/icon"
import 'isomorphic-unfetch'

export default class Songs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: [],
			songDetails: {
				songName: '',
				songLink: ''},
			formState: 0,
			loaded: false
		};
		this.fetchAllSongs = this.fetchAllSongs.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.fetchYoutubeResults = this.fetchYoutubeResults.bind(this);

		this.fetchAllSongs().then(() => (this.setState({ loaded: true })));
	}

	//Fetches latest song list from database
	async fetchAllSongs() {
		const res = await fetch('http://localhost:3000/server/fetch_all_songs');
		const data = await res.json();

		this.setState({
			songs : data
		});
	}

	//Post request to API
	async addSong(details) {
		return fetch('http://localhost:3000/server/add_song', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: 'title=' + encodeURIComponent(details.title) + '&artist=' + encodeURIComponent(details.artist) + '&link=' + encodeURIComponent(details.link)
		})
	}

	//Fetches search results from YouTube API
	async fetchYoutubeResults() {
		let res;
		if (this.state.songDetails.songLink) {
			const songID = encodeURIComponent(this.state.songDetails.songLink.split('=')[1]);
			console.log(songID);
			res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${songID}&key=AIzaSyBqv3usabo6RmE2IgN4RF08krhGfpKcJfM&part=snippet`);
		}
		else {
			res = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${this.state.songDetails.songName}&type=video&part=snippet&key=AIzaSyBqv3usabo6RmE2IgN4RF08krhGfpKcJfM`);
		}

		const body = await res.json();
		console.log(body);
		console.log('Hi Maxim, your video is here: https://www.youtube.com/watch?v=' + body.items[0].id.videoId);
		console.log('Interesting, it seems to be on "' + body.items[0].snippet.title + '"');
	}

	//Updates state when form is edited
	handleChange(event) {
		event.persist();
		if (event.target.id === 'song-name') {
			this.setState(prevState => ({
				songDetails: {
					...prevState.songDetails,
					songName: event.target.value
				}
			}));
		}
		else if (event.target.id === 'song-link') {
			this.setState(prevState => ({
				songDetails: {
					...prevState.songDetails,
					songLink: event.target.value
				}
			}));
		}
	}

	handleSubmit(event) {
		if (this.state.songDetails.songName || this.state.songDetails.songLink) {
			this.fetchYoutubeResults();
		}
		else {
			alert('Please enter a song name or link.')
		}

		event.preventDefault();
	}

	render() {
		return (
			<div>
				<Header />
				<Navbar />
				{this.state.loaded &&
					<div className={"container"}>
						<Title text={"Songs"}/>

						{/* Add song input */}
						{this.state.formState === 0 &&
							<div className={"row center card"}>
								<form className={"center"} onSubmit={this.handleSubmit}>
									<div className={"input-field col s4 offset-s1"}>
										<input id={"song-name"} type={"text"} onChange={this.handleChange}/>
										<label htmlFor={"song-name"}>Song name</label>
									</div>
									<div className={"input-field col s4 offset-s1"}>
										<input id={"song-link"} type={"text"} onChange={this.handleChange}/>
										<label htmlFor={"song-link"}>Link (optional)</label>
									</div>

									<div className={"input-field col s2"}>
										<button className={"btn waves-effect waves-light"} type={"submit"}
												value={"Submit"}>Submit
											<Icon text={"send"}/>
										</button>
									</div>
								</form>
							</div>
						}

						{/* Table of songs */}
						<table className={""} id={"songs-table"}>
							<thead>
								<tr>
									<th>Name</th>
									<th>Artist</th>
									<th>Length</th>
								</tr>
							</thead>
							<tbody>
							{
								this.state.songs.map((song) => {
									return <tr className={""}><td>{song.title}</td><td>{song.artist}</td><td>5:00</td></tr>
								})
							}
							</tbody>
						</table>
					</div>
				}
			</div>
		);
	}
}

class AddSongForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {songName: '',
			artistName: '',
			songLink: '',
			showResult: false
		};

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
						<Icon text={"send"}/>
					</button>
				</div>
			</form>
		);
	}
}