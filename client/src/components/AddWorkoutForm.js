import React, { useState } from 'react';
import { addWorkout } from '../api';

const AddWorkoutForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWorkout = { name, type, duration };
    try {
      await addWorkout(newWorkout);
      onAdd();
      setName('');
      setType('');
      setDuration('');
    } catch (error) {
      console.error('Error adding workout', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Workout Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default AddWorkoutForm;
