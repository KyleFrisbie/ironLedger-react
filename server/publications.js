import { Meteor } from 'meteor/meteor';

import {Workouts} from '../imports/collections/workouts';

Meteor.publish('workouts', () => {
	return Workouts.find({}, {limit: 20});
});