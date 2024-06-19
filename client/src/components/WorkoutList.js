import React from 'react';
import WorkoutItem from './WorkoutItem';

const WorkoutList = ({ workouts, onDelete }) => {
  return (
    <ul>
      {workouts.map((workout) => (
        <WorkoutItem key={workout._id} workout={workout} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default WorkoutList;
