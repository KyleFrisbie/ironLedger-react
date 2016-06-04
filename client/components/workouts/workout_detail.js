import React from 'react';

const WorkoutDetail = ({workout}) => {
	const {_id, author, publishDate, name, description} = workout;
	return (
		<div className="media">
			<div className="media-body">
				<h3 className="media-heading">{name}</h3>
				<h4>{description}</h4>
				<p>Created by: {author} </p>
				<p>Created on: {publishDate.toTimeString()}</p>
			</div>
		</div>
	)
};

export default WorkoutDetail;