import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import Toolbar from './components/toolbar'
import { Title, Subheading } from './components/title'
import SongCard from './components/card'
import Icon from "./components/icon"
import 'isomorphic-unfetch'

export default class Songs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//Songs loaded from database
			songs: [],

			//Add songs
			songDetails: '',
			resultDetails: {},

			//Delete songs
			removedSongID: '',

			//UX state
			formState: 0,
			loaded: false,
			toolbar: false
		};
		this.fetchAllSongs = this.fetchAllSongs.bind(this);
		this.addSong = this.addSong.bind(this);
		this.deleteSong = this.deleteSong.bind(this);
		this.selectSong = this.selectSong.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.fetchYoutubeResults = this.fetchYoutubeResults.bind(this);
		this.changeForm = this.changeForm.bind(this);
		this.toggleToolbar = this.toggleToolbar.bind(this);
		this.toggleToolbarOff = this.toggleToolbarOff.bind(this);

		this.fetchAllSongs().then(() => {
			this.setState({
				loaded: true,
				selectedSongs: []
			});

		});
	}

	//Fetches latest song list from database
	async fetchAllSongs() {
		const res = await fetch('http://localhost:3000/server/fetch_all_songs');
		const data = await res.json();
		//Sort by most recently added.
		this.setState({
			songs : data.reverse()
		});
	}

	async addSong() {
		return fetch('http://localhost:3000/server/add_song', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `title=${encodeURIComponent(this.state.resultDetails.title)}
			&artist=${encodeURIComponent(this.state.resultDetails.artist)}
			&link=${encodeURIComponent(this.state.resultDetails.url)}
			&duration=${encodeURIComponent(this.state.resultDetails.duration)}
			&thumbnail=${encodeURIComponent(this.state.resultDetails.thumbnail)}`
		}).then(() => {
			this.fetchAllSongs();
			this.changeForm(0);
		});
	}

	async updateSong() {

	}

	async deleteSong() {
		this.setState({
			removedSongIDs: []
		});
		return fetch(`http://localhost:3000/server/delete_song?id=${encodeURIComponent(this.state.selectedSongs)}`, {
			method: `DELETE`
		}).then((a) => {
			console.log(a);
			this.fetchAllSongs();
		});
	}

	//Fetches search results from YouTube API
	async fetchYoutubeResults() {
		let res;
		//Check whether submitted input is link or a regular search
		if (this.state.songDetails.split('=')[0] === 'https://www.youtube.com/watch?v') {
			const songID = encodeURIComponent(this.state.songDetails.split('=')[1]);
			res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${songID}&key=AIzaSyBqv3usabo6RmE2IgN4RF08krhGfpKcJfM&part=snippet`);
		}
		else {
			res = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${this.state.songDetails}&type=video&part=snippet&key=AIzaSyBqv3usabo6RmE2IgN4RF08krhGfpKcJfM`);
		}

		const resJSON = await res.json();

		//Parse relevant data into convenient object
		let parsedData = {
			title: resJSON.items[0].snippet.title,
			artist: resJSON.items[0].snippet.channelTitle,
			url: 'https://www.youtube.com/watch?v=' + resJSON.items[0].id.videoId,
			id: resJSON.items[0].id.videoId,
			thumbnail: resJSON.items[0].snippet.thumbnails.medium.url
		};

		//Disgusting workaround to find video duration
		const videoInfo = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${parsedData.id}&key=AIzaSyBqv3usabo6RmE2IgN4RF08krhGfpKcJfM&part=contentDetails`);
		const videoInfoJSON = await videoInfo.json();
		let duration = videoInfoJSON.items[0].contentDetails.duration;
		if (duration.search(/S/) === -1) {
			duration += '00S';
		}
		parsedData.duration = duration.substring(2, duration.length-1).split(/H|M|S/).join(':');

		this.setState({
			formState: 2,
			resultDetails: parsedData
		});
	}

	//Updates state when form is edited
	handleChange(event) {
		event.persist();
		this.setState({
			songDetails: event.target.value
		});
	}

	handleSubmit(event) {

		if (this.state.songDetails) {
			this.fetchYoutubeResults();
		}
		else {
			alert('Please enter a song name or link.');
		}
		event.preventDefault();
	}

	changeForm(state) {
		this.setState({
			formState: state
		});
	}

	toggleToolbar(mode) {
		if (mode === 'show') {
			this.setState({
				toolbar: true
			});
		}
		else {
			this.setState({
				toolbar: false
			});
		}
	}

	toggleToolbarOff() {
		this.setState({
			toolbar: false
		})
	}

	selectSong(id, add) {
		if (add) {
			this.setState({
				selectedSongs: [...this.state.selectedSongs, id]
			});
		}
		else {

		}
		console.log(this.state.selectedSongs);
		this.toggleToolbar('show');
	}

	foo() {
		console.log('foo');
	}

	render() {
		return (
			<div>
				<Header />
				{!this.state.toolbar &&
					<Navbar/>
				}
				{this.state.toolbar &&
					<Toolbar toggleToolbar={this.toggleToolbar} deleteSong={this.deleteSong} />
				}
				{this.state.loaded &&
					<div className={"container"}>
						<Title text={"Songs"}/>

						{/* Add song input */}
						<div className={"row"}>
							<div className={"col s2 center btn-stage-" + this.state.formState} id={"btn-form"} onClick={() => {this.changeForm(1)}}>
								Add Song
								<Icon text={"add"}/>
							</div>
							<div className={'center form-stage-' + this.state.formState} id={"song-form"}>
								<form className={""} onSubmit={this.handleSubmit}>
									<div className={"input-field text-input col s8 offset-s2"}>
										<input id={"song-name"} type={"text"} onChange={this.handleChange}/>
										<label htmlFor={"song-name"}>Song</label>
									</div>
									<div className={"input-field text-input"}>
										<button className={"btn waves-effect waves-light"} type={"submit"}
												value={"Submit"}>Submit
											<Icon text={"send"}/>
										</button>
									</div>
								</form>
							</div>
							{/* Result card to display after querying YouTube API */}
							<div className={"row"}>
								<div className={'card col s6 offset-s3 grey darken-4 result-stage-' + this.state.formState} id={'result-form'}>
									<button className={"btn btn-floating red darken-3 waves-effect waves-light"} id={"close-button"} onClick={() => {this.changeForm(0)}}><Icon text={"close"} /></button>
									<h6 className={"grey-text"}>Result:</h6>
									<div className={"center"}>
										<h4><b>"{this.state.resultDetails.title}"</b>, by <b>{this.state.resultDetails.artist}</b></h4>
										<a href={this.state.resultDetails.url}>{this.state.resultDetails.url}</a>
										<a href={this.state.resultDetails.url}><img src={this.state.resultDetails.thumbnail} /></a>
										<br />
										<br />
										<button className={"btn-large green waves-effect waves-light"} onClick={this.addSong}>Add <Icon text={"done"} /></button>
									</div>
								</div>
							</div>
						</div>

						{/* Table of songs */}
						<table className={""} id={"songs-table"}>
							<thead>
								<tr>
									<th>Name</th>
									<th>Artist</th>
									<th>Length</th>
									<th> </th>
								</tr>
							</thead>
							<tbody>
							{
								(this.state.songs).map((song, id) => {
									return <tr key={song._id}>
										<td><a href={song.link}>{song.title}</a></td>
										<td>{song.artist}</td>
										<td>{song.duration}</td>
										<td><label>
											<input id={`song-${id}`} type="checkbox" songId={song._id} onChange={() => {this.selectSong(song._id, true)}} />
											<span></span>
										</label></td>
									</tr>
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