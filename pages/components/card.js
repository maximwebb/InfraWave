import React from 'react'
import Link from 'next/link'

const IMG = (props) => (
	<Link as={props.link} href={props.link}>
		<a>
		<div className="card s6 m4 l4 xl3 blue-grey song-card" href={props.link}>
			{props.image &&
				<div className={"card-image"}>
					 <img src={props.image} />
					 <h4 className={"card-title"}> {props.title} </h4>
				</div>
			}
			<div className="card-content">
				{!props.image &&
					<span className="card-title">{props.title}</span>
				}
				<p>By {props.artist}</p>
			</div>
		</div>
		</a>
	</Link>
);

const PostLink = (props) => (
	<div>
		<Link as={props.title} href={props.title}>
			<a>{props.title}</a>
		</Link>
	</div>
);


export default IMG