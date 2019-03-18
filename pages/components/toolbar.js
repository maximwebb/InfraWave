import React from 'react'
import Head from 'next/head'

export default class Toolbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return 	<div className={"navbar-fixed"}>
			<Head>
				<link rel={"stylesheet"} href={"static/css/toolbar.css"}/>
			</Head>
			<nav role="navigation" className={"orange darken-1"}>
				<div className="nav-wrapper container">
					<a id={"close-tab"} onClick={this.props.toggleToolbar} className={"brand-logo"}>
						<i className={"material-icons"}>close</i>
					</a>
					<ul className="right hide-on-med-and-down">
						{/*<Tab name={"Add to playlist"} icon={"add"}/>*/}
						{/*<Tab name={"Delete"} icon={"delete"} method={() => (console.log(1))}/>*/}
						<Tab name={"Delete"} icon={"delete"} method={this.props.deleteSong}/>
						{/*<Tab name={"About"} icon={"info"}/>*/}
					</ul>
				</div>
			</nav>
		</div>
	}


}

class Tab extends React.Component {

	constructor() {
		super();
	}

	render() {
		return(
			<div className={"toolbar-tab"}>
				<li>
					<a className={"toolbar-link"} onClick={this.props.method}>
						<i className={"material-icons"}>{this.props.icon}</i>
						<p>{this.props.name}</p>
					</a>
				</li>
			</div>
		)
	}
};