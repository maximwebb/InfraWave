import React from 'react'
import Str from '../../static/scripts/str'

const EmailInput = (props) => (
	<div>

		<div className={"input-field inline col s4 push-s3"} style={{display: 'flex', justifyContent: 'space-evenly'}}>

			<input id={props.id + "-input"} type={props.type} className={"validate blue-text text-darken-2"} />
			<label htmlFor={props.id + "-input"}>{Str.toProperCase(props.type)}</label>
			<span className={"helper-text"} data-error={"Invalid email address..."} data-success={""} />

		</div>

		{props.button &&
			<button className={"inline btn green darken-1 waves-effect waves-light"} type={"submit"} style={{marginTop: 20 + 'px'}}>Submit</button>
		}
	</div>
);

export default EmailInput
