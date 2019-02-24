import Head from 'next/head'

export default class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Head>
					<title>InfraWave</title>

					<meta name="viewport" content="width=device-width, initial-scale=1" />

					{/* Stylesheets */}
					<link rel={"stylesheet"} href={"static/materialize/css/materialize.css"}/>
					<link rel={"stylesheet"} href={"static/css/general.css"}/>
					<link rel={"stylesheet"} href={"static/css/navbar.css"}/>

					{/* Other */}
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet" />
					<link rel="icon" href="static/images/logo.png" />

					{/* Scripts */}
					<script type={"text/javascript"} src={"static/materialize/js/materialize.js"}> </script>
					<script type={"text/javascript"} src={"static/scripts/scroll_nav.js"}> </script>
				</Head>
			</div>
		);
	}
}