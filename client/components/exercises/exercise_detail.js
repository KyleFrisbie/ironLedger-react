import React from 'react';

const ExerciseDetail = ({exercise}) => {
    const {_id, name, targetMuscles} = exercise;
    return (
        <div className="media">
            <div className="media-body">
                <h3 className="media-heading">{name}</h3>
                <p>Target Muscles: {targetMuscles}</p>
            </div>
        </div>
    )
};

export default ExerciseDetail;