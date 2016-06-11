import React from 'react';
import {Link} from 'react-router';

const WorkoutDetail = ({workout}) => {
    const {_id, author, publishDate, name, description} = workout;
    const url = `/workouts/${workout._id}`;
    return (
        <div className="media">
            <div className="media-body">
                {/* TODO: only go to edit mode for a user that owns the workout */}
                <Link to={url}><h3 className="media-heading">{name}</h3></Link>
                <h4>{description}</h4>
                <p>Created by: {author} </p>
                <p>Created on: {publishDate.toTimeString()}</p>
            </div>
        </div>
    )
};

export default WorkoutDetail;