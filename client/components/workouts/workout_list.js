import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import Workouts from '../../../imports/collections/workouts';
import WorkoutDetail from './workout_detail';

const PER_PAGE = 20;

// TODO: dynamically update workout records on button click
const WorkoutList = (props) => {
	return (
		<div>
			{/* TODO: Dynamically load more workouts */}
			<button onClick={() => Meteor.subscribe('workouts')}
					className="btn btn-primary">
				Load more...
			</button>
			<div className="workout-list">
				{props.workouts.map(workout => <WorkoutDetail key={workout._id} workout={workout}/>)}
			</div>
		</div>
	);
};

export default createContainer(() => {
	// set up subscription
	Meteor.subscribe('workouts');

	// return an object, sent to WorkoutList as props
	return {workouts: Workouts.find({}).fetch()};
}, WorkoutList);
