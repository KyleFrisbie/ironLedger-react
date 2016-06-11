import { Meteor } from 'meteor/meteor';

import Workouts from '../imports/collections/workouts';
import Exercises from '../imports/collections/exercises';

Meteor.publish('workouts', () => {
	return Workouts.find();
});

Meteor.publish('exercises', function () {
	return Exercises.find();
});
