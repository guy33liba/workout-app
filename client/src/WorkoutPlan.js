import React, { useEffect, useState } from "react"
import axios from "axios"

const WorkoutPlan = ({ user }) => {
  const [workoutPlan, setWorkoutPlan] = useState(null)

  useEffect(() => {
    const fetchWorkoutPlan = async () => {
      try {
        const response = await axios.get("/api/workout-plan")
        setWorkoutPlan(response.data)
      } catch (error) {
        console.error("Error fetching workout plan:", error)
      }
    }
    fetchWorkoutPlan()
  }, [])
  function getCurrentWeekNumber() {
    const currentDate = new Date()

    const januaryFirst = new Date(currentDate.getFullYear(), 0, 1)

    const timeDifference = currentDate - januaryFirst
    const millisecondsInWeek = 1000 * 60 * 60 * 24 * 7
    const weekNumber = Math.ceil(timeDifference / millisecondsInWeek)

    return weekNumber
  }
  const updateWorkoutPlan = async (newWorkoutPlan) => {
    try {
      const response = await axios.put("/api/workout-plan", {
        workouts: newWorkoutPlan,
      })
      setWorkoutPlan(response.data)
    } catch (error) {
      console.error("Error updating workout plan:", error)
    }
  }

  return (
    <div>
      <h2>Workout Plan</h2>
      {workoutPlan && (
        <div>
          <p>Monday: {workoutPlan.workouts.monday}</p>
          <p>Tuesday: {workoutPlan.workouts.tuesday}</p>
          <p>Wednesday: {workoutPlan.workouts.wednesday}</p>
          <p>Thursday: {workoutPlan.workouts.thursday}</p>
          <p>Friday: {workoutPlan.workouts.friday}</p>
          <p>Saturday: {workoutPlan.workouts.saturday}</p>
          <p>Sunday: {workoutPlan.workouts.sunday}</p>
        </div>
      )}
    </div>
  )
}

export default WorkoutPlan
