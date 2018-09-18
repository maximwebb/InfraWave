import React from 'react'
import ReactDOM from 'react-dom'

// const SongCard = (props) => (
// 	if (props.image) {
// 		return <IMG />
// 	}
// 	else {
// 		return <NoIMG />
// 	}
// )

const NoIMG = (props) => (
	<div className="card col s4 blue-grey">
		<div className="card-content">
			<span className="card-title">{props.title}</span>
			<p>{props.text}</p>
		</div>
	</div>
)

const IMG = (props) => (
	<div className="card col s3 blue-grey song-card">
		<div className={"card-image"}>
			 <img src={props.image} />
			 <span className={"card-title"}> {props.title} </span>
		</div>
		<div className="card-content">
			<p>{props.text}</p>
		</div>
	</div>
)

export default IMG