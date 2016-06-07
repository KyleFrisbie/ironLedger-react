import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import Exercises from '../../../imports/collections/exercises';
import ExerciseDetail from './exercise_detail';

const PER_PAGE = 20;

const ExerciseList = (props) => {
    return (
        <div>
            <div className="exercise-list">
                {props.exercises.map(exercise => <ExerciseDetail key={exercise._id} exercise={exercise}/>)}
            </div>
        </div>
    );
};

export default createContainer(() => {
    // set up subscription
    Meteor.subscribe('exercises');
    
    return {exercises: Exercises.find({}).fetch()};
}, ExerciseList);