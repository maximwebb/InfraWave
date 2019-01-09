import React from "react";
//import SongInputField from './song_input_field';
import Icon from "./icon";
import fetch from 'isomorphic-unfetch'

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
		console.log(this.state.songName + ' - song by ' + this.state.artistName + ' . Link: ' + this.state.songLink);
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

				{/*<div className={"input-field col s4 offset-s1"}>*/}
					{/*<input id={"song-name"} type={"text"} value={this.state.value} onChange={this.handleChange} />*/}
					{/*<label htmlFor={"song-name"}>Song name</label>*/}
				{/*</div>*/}

				<div className={"input-field col s2"}>
				<button className={"btn waves-effect waves-light"} type={"submit"} value={"Submit"}>Submit
					<Icon text={"send"} />
				</button>
				</div>
			</form>
		);
	}
}

const SongInputField = (props) => (
	<div className={"input-field col s4 offset-s1"}>
		<input id={props.id} type={"text"} onChange={AddSongForm.handleChange}/>
		<label htmlFor={props.id}>{props.name}</label>
	</div>
);


export default AddSongForm;


