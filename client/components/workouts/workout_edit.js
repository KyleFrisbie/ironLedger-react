import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import Workouts from '../../../imports/collections/workouts';

class WorkoutEditor extends Component {
    render() {
        console.log("Props: ", this.props.workout);
        if (!this.props.workout) {
            {/* TODO: update with loading spinner */
            }
            return <div>Loading...</div>
        }
        const {_id, author, publishDate, name, description} = this.props.workout;
        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label for="author">Author</label>
                        <input type="text" value={author} class="form-control" id="author" placeholder="Author"/>
                    </div>
                    <div className="form-group">
                        <label for="workout-name">Workout</label>
                        <input type="text" class="form-control" id="workout-name" placeholder={name}/>
                    </div>
                    <div className="form-group">
                        <label for="description">Workout Description</label>
                    <textarea className="form-control" id="description" rows="3">
                        {description}
                    </textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default createContainer((props) => {
    const {workoutId} = props.params;
    Meteor.subscribe('workouts');

    return {workout: Workouts.findOne(workoutId)}
}, WorkoutEditor);