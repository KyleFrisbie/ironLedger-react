// Declare workout collection
import {Mongo} from 'meteor/mongo';
import WorkoutSchema from '../schemas/workouts_schema';

const Workouts = new Mongo.Collection('workouts');
Workouts.attachSchema(WorkoutSchema);

export default Workouts;