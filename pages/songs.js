import Navbar from './includes/navbar'
import Header from './includes/header'
import Title from './components/title'
import SongCard from './components/song-card'

const Songs = () => (
	<div>
		<Header />
		<Navbar />
		<div className={"container"}>
			<Title text={"Songs"} />
			<div className={"row"}>
				<SongCard title={"AM - Arctic Monkeys"} text={"AM is the fifth studio album by English indie rock band Arctic Monkeys. It was produced by James Ford and co-produced by Ross Orton at Sage & Sound."} image={"https://www.radioeins.de/content/dam/rbb/rad/archiv/alben/a/am_von_arctic_monkeys.jpg.jpg/img.jpg"} />
				<SongCard title={"Wasting Light - Foo Fighters"} text={"Wasting Light is the seventh studio album by American rock band Foo Fighters. It was released on April 12, 2011 on RCA Records, and is the first album to feature rhythm guitarist Pat Smear since The Colour and the Shape."} image={"https://img.discogs.com/ifWjm1vxuUupHl8n6YouNkQx-70=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2817423-1304635652.jpeg.jpg"} />
			</div>
		</div>

	</div>
)

export default Songs