import React from "react"
import WorkoutItem from "./WorkoutItem"

const WorkoutList = ({ workouts, onDelete }) => {
  return (
    <ul>
      {workouts.map((workout) => (
        <div >
          <WorkoutItem key={workout._id} workout={workout} onDelete={onDelete} />
        </div>
      ))}
    </ul>
  )
}

export default WorkoutList
