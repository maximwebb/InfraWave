import Head from 'next/head'

const Header = () => (
	<div>
		<Head>
			<title>InfraWave</title>

			{/* Stylesheets */}
			<link rel={"stylesheet"} href={"static/materialize/css/materialize.css"}/>
			<link rel={"stylesheet"} href={"static/css/general.css"}/>
			<link rel={"stylesheet"} href={"static/css/navbar.css"}/>

			{/* Other */}
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet" />
			<link rel="icon" href="static/images/logo.png" />

			{/* Scripts */}
			<script type="text/javascript" src="static/materialize/js/materialize.js"> </script>

		</Head>
	</div>
);

export default Header