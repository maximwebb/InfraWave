import React from 'react'
import Str from '../../static/scripts/str'

const EmailInput = (props) => (
	<div>

		<div className={"input-field inline col s4 push-s3"} style={{marginRight: 15 + 'px'}}>

			<input id={props.id + "-input"} type={props.type} className={"validate white-text"} />
			<label htmlFor={props.id + "-input"}>{Str.toProperCase(props.type)}</label>
			<span className={"helper-text"} data-error={"Invalid email address..."} data-success={"Loading..."} />

		</div>

		{props.button &&
			<button className={"inline btn green darken-1 waves-effect waves-light"} type={"submit"} style={{marginTop: 20 + 'px', marginRight: 100 + 'px'}}>Submit</button>
		}
	</div>
);

export default EmailInput
