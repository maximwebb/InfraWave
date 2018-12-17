import {withRouter} from 'next/router'

const Content = withRouter((props) => (
	<div>
		<h1>{props.router.query.title}</h1>
		<p>Here is a blog post</p>
		<p>Here is a number: {props.router.query.num}</p>
	</div>
))

const Page = withRouter((props) => (
	<div>

		<Content />
	</div>
))

export default Page