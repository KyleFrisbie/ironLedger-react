import {Meteor} from 'meteor/meteor';
import _ from 'lodash';
import faker from 'faker';

import Workouts from '../imports/collections/workouts';
import Exercises from '../imports/collections/exercises';


Meteor.startup(() => {// Generate dummy data if no data is present
	if (Meteor.isDevelopment) {
		SimpleSchema.debug = true;
	}
	if (Exercises.find().count() === 0) {
		Exercises.insert(
			{
				// author: 'admin',
				// userId: '1',
				// publishDate: new Date(),
				name: 'Bench Press',
				bodyPart: 'chest'
			}
		);
		Exercises.insert(
			{
				// author: 'admin',
				// userId: '1',
				// publishDate: new Date(),
				name: 'Barbell Bicep Curl',
				bodyPart: 'biceps'
			}
		);
		Exercises.insert(
			{
				// author: 'admin',
				// userId: '1',
				// publishDate: new Date(),
				name: 'Sit-up',
				bodyPart: 'abdominals'
			}
		);
		Exercises.insert(
			{
				// author: 'admin',
				// userId: '1',
				// publishDate: new Date(),
				name: 'Squat',
				bodyPart: 'legs'
			}
		)
	}

	if (Workouts.find().count() === 0) {
		Workouts.insert(
			{
				author: 'admin',
				publishDate: new Date(),
				name: 'Freak-out Friz',
				description: faker.lorem.sentences()
			}
		);
		Workouts.insert(
			{
				author: 'admin',
				publishDate: new Date(),
				name: 'Arnold\'s Oblivion',
				description: faker.lorem.sentences()
			}
		);
		Workouts.insert(
			{
				author: 'admin',
				publishDate: new Date(),
				name: 'Sally\'s Submission',
				description: faker.lorem.sentences()
			}
		);
		Workouts.insert(
			{
				author: 'admin',
				publishDate: new Date(),
				name: 'Repetitive Riggen',
				description: faker.lorem.sentences()
			}
		);
	}

	//const numberOfWorkoutRecords = Workouts.find({}).count();
	//if (!numberOfWorkoutRecords) {
	//	_.times(5000, () => {
	//		Workouts.insert({
	//			'createdBy': faker.name.firstName(),
	//			'createdOn': faker.date.past(),
	//			'fitnessType': faker.lorem.word(),
	//			'name': faker.lorem.words(),
	//			'imageUrl': faker.image.image()
	//		});
	//	});
	//}

});
