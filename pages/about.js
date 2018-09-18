import Header from './includes/header'
import Navbar from './includes/navbar'
import Title from './components/title'

export default () => (
	<div>
		<Header />
		<Navbar />
		<div className="container">
			<Title text={"About InfraWave"} />
			<p>This is about</p>
		</div>
	</div>
)
