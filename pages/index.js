import React from 'react'
import Header from './includes/header'
import Navbar from './includes/navbar'
import Title from './components/title'
import Textbox from './components/textbox'
import EmailInput from './components/email-input'
import Link from 'next/link'

const App = () => (
	<div className="white-text-darken-3">
		<Header />
		<Navbar />
		<div className="" id={"section-1"}>
			<div className={"container"}>
				<Title text={"Welcome to InfraWave"} />
				<div className={"row"}>
					<div className={"col s10 offset-s1"} style={{paddingBottom: 80+ 'px', borderRadius: 25 + 'px'}}>
						<div className={"row center"}>
							<div className={"col s10 offset-s1"}>
								<Textbox text={"InfraWave provides the tools you need to organise, manage and play your favourite music."} />
							</div>
						</div>
						<div className={"row center"} >
							<br />
							<div className={"col s10 offset-s1 card white"} style={{padding: 20 + 'px', borderRadius: 50 + 'px'}}>
								<EmailInput id={"welcome"} type={"email"} button={true} />
							</div>
						</div>
					</div>
				</div>

				<div className={"row center"}>
					<div className={""}><a className={"btn-floating btn-large teal waves-effect waves-light"}><i className={"material-icons"}>expand_more</i></a></div>
				</div>
			</div>
		</div>

		{/*<div className={"container"} id={"section-2"}>*/}
			<p>This is some text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
		{/*</div>*/}
	</div>
);

// const PostLink = (props) => (
// 	<li>
// 		<Link as={`/kirkland/${props.id}`} href={`/post?title=${props.title}&num=${props.num}`}>
// 			  <a>{props.title}</a>
// 		</Link>
// 	</li>
// )
//
// const App = () => (
// 	<div>
// 		<p>Hello World</p>
// 		<ul>
// 			<PostLink id={"hello"} title={"Hi guys"} num={1}/>
// 			<PostLink id={"small talk"} title={"How are you"} num={5}/>
// 			<PostLink id={"goodbye"} title={"Goodbye!"} num={23}/>
// 		</ul>
// 	</div>
// )

export default App