import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {Workouts} from '../../imports/collections/workouts';
import WorkoutDetail from './workout_detail';

const PER_PAGE = 20;

// TODO: dynamically update workout records on button click
const WorkoutList = (props) => {
	console.log(props.workouts);
	return (
		<div>
			<div className="workout-list">
				{props.workouts.map(workout => <WorkoutDetail key={workout._id} workout={workout}/>)}
			</div>
			<button onClick={() => Meteor.subscribe('workouts', 40)}
							className="btn btn-primary">
				Load more...
			</button>
		</div>
	);
};

export default createContainer(() => {
	// set up subscription
	Meteor.subscribe('workouts', PER_PAGE);

	// return an object, sent to WorkoutList as props
	return {workouts: Workouts.find({}).fetch()};
}, WorkoutList);
