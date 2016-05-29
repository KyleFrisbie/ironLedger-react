import { Meteor } from 'meteor/meteor';

import {Workouts} from '../imports/collections/workouts';

Meteor.publish('workouts', (per_page) => {
	return Workouts.find({}, {limit: per_page});
});
