import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {Workouts} from '../../imports/collections/workouts';

const WorkoutList = () => {
	return (
		<div>
			<div className="workout-list">
				Workout List
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
