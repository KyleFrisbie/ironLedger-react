import {Schema} from './base_schema';

export const exerciseSchema = new Schema({
	name: String,
	involvedMuscles: [{muscleName: String}]
});