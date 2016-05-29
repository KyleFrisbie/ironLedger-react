import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import faker from 'faker';

import {Workouts} from '../imports/collections/workouts';

Meteor.startup(() => {
  // code to run on server at startup
	// Generate dummy data if no data is present
	const numberOfWorkoutRecords = Workouts.find({}).count();
	if (!numberOfWorkoutRecords) {
		_.times(5000, () => {
			Workouts.insert({
				'createdBy': faker.name.firstName(),
				'createdOn': faker.date,
				'fitnessType': faker.lorem.word,
				'name': faker.words,
				'image': faker.image.imageUrlt
			});
		});
	}
});
