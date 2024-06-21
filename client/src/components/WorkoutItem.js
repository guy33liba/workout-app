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
    <li className="listItems">
      <li>
        <span>Name:</span> {workout.name}
      </li>
      <li>
        <span>Type:</span>
        {workout.type}
      </li>
      <li>
        <span>Duration:</span>
        {workout.duration}: minutes
      </li>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default WorkoutItem
