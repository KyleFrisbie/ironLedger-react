import React from 'react';

const WorkoutDetail = ({workout}) => {
	const {_id, createdBy, createdOn, imageUrl, name, fitnessType} = workout;
	return (
		<div className="media">
			<div className="media-left">
				<img src={imageUrl}/>
			</div>
			<div className="media-body">
				<h3 className="media-heading">{name}</h3>
				<h4>{fitnessType}</h4>
				<p>Created by: {createdBy} </p>
				<p>Created on: {createdOn.toTimeString()}</p>
			</div>
		</div>
	)
};

export default WorkoutDetail;