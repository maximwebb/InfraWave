import Link from 'next/link'

const Navbar = () => (
	<nav className="blue darken-3" role="navigation">
		<div className="nav-wrapper container" id="desktop-nav-menu">
			<a href="/">
				<img id="logo-container" className="brand-logo left" src="/static/images/logo.svg"/>
				<div id="logo-text">InfraWave</div>
			</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><Link href="/">
					<a className="material-icons" id={"home-tab"}>home</a>
				</Link></li>
				<li><Link href="/about">
					<a>About</a>
				</Link></li>
				<li><Link href="/songs">
					<a>Songs</a>
				</Link></li>
			</ul>
		</div>
	</nav>
);

export default Navbar