import React from 'react'

const IMG = (props) => (
	<div className="card col s3 blue-grey song-card">
		{props.image &&
			<div className={"card-image"}>
				 <img src={props.image} />
				 <span className={"card-title"}> {props.title} </span>
			</div>
		}
		<div className="card-content">
			{!props.image &&
				<span className="card-title">{props.title}</span>
			}
			<p>{props.text}</p>
		</div>

	</div>
);

export default IMG