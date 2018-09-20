import Navbar from './includes/navbar'
import Header from './includes/header'
import Title from './components/title'
import SongCard from './components/card'
import React from "react";

const Songs = () => (
	<div>
		<Header />
		<Navbar />
		<div className={"container"}>
			<Title text={"Songs"} />
			<div className={"row center"}>

				<SongCard title={"Do I wanna know? - Arctic Monkeys"} text={"From AM (2012)"} image={"https://www.radioeins.de/content/dam/rbb/rad/archiv/alben/a/am_von_arctic_monkeys.jpg.jpg/img.jpg"} />
				<SongCard title={"Rope - Foo Fighters"} text={"From Wasting Light (2011)"} image={"https://img.discogs.com/ifWjm1vxuUupHl8n6YouNkQx-70=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2817423-1304635652.jpeg.jpg"} />
				<SongCard title={"Maths god - Slim Thakey"} text={"Single (2013)"} image={"https://media.discordapp.net/attachments/432278207148982283/492430199300816896/thake.png"} />
			</div>
		</div>

	</div>
)

export default Songs