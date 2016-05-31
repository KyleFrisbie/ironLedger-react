import {Schema} from './base_schema';
import {exercisesSchema} from './exercises_schema';

export const workoutsSchema = new Schema({
	title: String,
	author: String,
	publishDate: Date,
	description: String,
	exercises: [exercisesSchema]
});

