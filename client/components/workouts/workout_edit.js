import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import Workouts from '../../../imports/collections/workouts';

class WorkoutEditor extends Component {
    render() {
        console.log("Props: ", this.props.workout);
        const {_id, author, publishDate, name, description} = this.props.workout;
        if (!this.props.workout) {
            {/* TODO: update with loading spinner */}
            return <div>Loading...</div>
        }
        return (
            <form>
                <div className="form-group">
                    <label for="author">Author</label>
                    <input type="text" class="form-control" id="author" placeholder={author}/>
                </div>
                <div className="form-group">
                    <label for="workout-name">Workout</label>
                    <input type="text" class="form-control" id="workout-name" placeholder="Workout Name"/>
                </div>
                <div className="form-group">
                    <label for="description">Workout Description</label>
                    <textarea className="form-control" id="description" rows="3">
                        {description}
                    </textarea>
                </div>
            </form>
        )
    }
}

export default createContainer((props) => {
    const {workoutId} = props.params;
    Meteor.subscribe('workouts');

    return {workout: Workouts.findOne(workoutId)}
}, WorkoutEditor);