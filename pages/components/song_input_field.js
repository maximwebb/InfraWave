import React from 'react'

const SongInputField = (props) => (
	<div className={"input-field col s4 offset-s1"}>
		<input id={props.id} type={"text"} onChange={this.handleClick}/>
		<label htmlFor={props.id}>{props.name}</label>
	</div>
);

export default SongInputField;