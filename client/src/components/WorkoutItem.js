import React from "react"
import { deleteWorkout } from "../api"

const WorkoutItem = ({ workout, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteWorkout(workout._id)
      onDelete()
    } catch (error) {
      console.error("Error deleting workout", error)
    }
  }

  return (
    <li>
      {workout.name} - {workout.type} - {workout.duration} minutes
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default WorkoutItem
