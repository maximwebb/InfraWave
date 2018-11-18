import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => (
	<div className={"center"}>
		<h1 className={"title-text"}>{props.text} </h1>
		<br />
	</div>
)

export default Title