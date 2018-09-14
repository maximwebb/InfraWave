import Link from 'next/link'


const Navbar = () => (
	<nav class="blue darken-3" role="navigation">
		<div class="nav-wrapper container" id = "desktop-nav-menu">
			<a href="/">
				<img id="logo-container"  class="brand-logo left" src = "/images/logo.svg" />
				<div id="logo-text">InfraWave</div>
			</a>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li><Link href="/">
					<a class="material-icons">home</a>
				</Link></li>
				<li><Link href="/about">
					<a class="material-icons">about</a>
				</Link></li>
				<li><Link href="/">
					<a class="material-icons">home</a>
				</Link></li>
			</ul>
		</div>
	</nav>
);

export default Navbar