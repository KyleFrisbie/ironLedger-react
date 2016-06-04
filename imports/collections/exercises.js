import {Mongo} from 'meteor/mongo';
import ExerciseSchema from '../schemas/exercises_schema';

const Exercises = new Mongo.Collection('exercises');
Exercises.attachSchema(ExerciseSchema);

export default Exercises;
