import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import Title from './components/title'
import SongCard from './components/card'
import fetch from 'isomorphic-unfetch'

const Songs = (props) => (
	<div>
		<Header />
		<Navbar />
		<div className={"container"}>
			<Title text={"Songs"} />
			<div className={"row center card-container"}>
				{
					props.songs.map((song) => {
						return <SongCard title={song.title} text={song.description} key={song._id}> </SongCard>
					})
				}
			</div>
		</div>

	</div>
);

Songs.getInitialProps = async function() {
	const res = await fetch('http://localhost:3000/server/fetch_all_songs');
	const data = await res.json();

	return {
		songs: data
	}
};

export default Songs