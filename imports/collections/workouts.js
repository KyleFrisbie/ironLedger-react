// Declare workout collection
import {Mongo} from 'meteor/mongo';
import WorkoutSchema from '../schemas/workouts_schema';

const Workouts = new Mongo.Collection('workouts');
Workouts.attachSchema(WorkoutSchema);

Meteor.methods({
    'workouts.insert': function (workout) {
        
    }
});

export default Workouts;