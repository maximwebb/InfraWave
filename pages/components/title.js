import React from 'react'

export const Title = (props) => (
	<div className={"center"}>
		<h1 className={"title-text"}>{props.text}</h1>
		<br />
	</div>
);
export const Subheading = (props) => (
	<div>
		<h4 className={"title-text"}>{props.text}</h4>
	</div>
);