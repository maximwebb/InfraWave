import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import { Title } from './components/title'
import SongCard from './components/card'

export default class Albums extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Header />
				<Navbar />
				<div className={"container"}>
					<Title text={"Albums"} />
					<div className={"row center card-container"}>
						<SongCard title={"AM - Arctic Monkeys"} text={"AM is the fifth studio album by English indie rock band Arctic Monkeys. It was produced by James Ford and co-produced by Ross Orton at Sage & Sound."} image={"https://www.radioeins.de/content/dam/rbb/rad/archiv/alben/a/am_von_arctic_monkeys.jpg.jpg/img.jpg"} />
						<SongCard title={"Wasting Light - Foo Fighters"} text={"Wasting Light is the seventh studio album by American rock band Foo Fighters. It was released on April 12, 2011 on RCA Records, and is the first album to feature rhythm guitarist Pat Smear since The Colour and the Shape."} image={"https://img.discogs.com/ifWjm1vxuUupHl8n6YouNkQx-70=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2817423-1304635652.jpeg.jpg"} />
						<SongCard title={"Thaketrons - Maths god"} text={"Thake's latest album has spread joy and happiness across the mathematical community."} image={"https://media.discordapp.net/attachments/432278207148982283/492430199300816896/thake.png"} />
					</div>
				</div>

			</div>
		);
	};
}