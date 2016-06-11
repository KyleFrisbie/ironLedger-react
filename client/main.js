import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import WorkoutList from './components/workouts/workout_list';
import WorkoutEdit from './components/workouts/workout_edit';
import ExerciseList from './components/exercises/exercise_list';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="workouts" component={WorkoutList}/>
            <Route path="workouts/:workoutId" component={WorkoutEdit}/>
            <Route path="exercises" component={ExerciseList}/>
        </Route>
    </Router>
);

// Render app in the DOM after Meteor loads in the browser
Meteor.startup(() => {
    // React render call
    ReactDOM.render(routes, document.querySelector('.container'));
});
