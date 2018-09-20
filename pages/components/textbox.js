import React from 'react';
import ReactDOM from 'react-dom';

const Textbox = (props) => (
	<div className={"blue-grey-text text-lighten-4"}>
		<p className={"flow-text "}>{props.text}</p>
	</div>
);

export default Textbox