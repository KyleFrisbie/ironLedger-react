import { Meteor } from 'meteor/meteor';

import Workouts from '../imports/collections/workouts';
import Exercises from '../imports/collections/exercises';

Meteor.publish('workouts', (per_page) => {
	return Workouts.find({}, {limit: per_page});
});

Meteor.publish('exercises', function () {
	return Exercises.find();
});
