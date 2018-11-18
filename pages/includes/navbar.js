import Link from 'next/link'

const Navbar = () => (
	<div className={"navbar-fixed"}>
		<nav role="navigation">
			<div className="nav-wrapper container" id="desktop-nav-menu">
				<a href="/">
					<img id="logo-container" className="brand-logo left" src="/static/images/logo.svg"/>
					<div id="logo-text">InfraWave</div>
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<Tab link={"/"} name={"home"} icon={true}/>
					<Tab link={"/songs"} name={"Songs"} icon={false}/>
					<Tab link={"/albums"} name={"Albums"} icon={false}/>
					<Tab link={"/about"} name={"About"} icon={false}/>
				</ul>
			</div>
		</nav>
	</div>
);

const Tab = (props) => (
	<li><Link href={props.link}>
			<a className={props.icon ? "material-icons" : ""} id={props.name.toLowerCase() + "-tab"}> {props.name} </a>
		</Link>
	</li>
);

export default Navbar