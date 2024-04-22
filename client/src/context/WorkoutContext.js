import axios from "axios"
import React, { useState, createContext, useEffect } from "react"
export const WorkingOutContext = createContext()

const WorkoutContext = ({ children }) => {
  const [workoutList, setWorkoutList] = useState({
    cardio: [],
    upperBody: [],
    abs: [],
    legs: [],
  })

  const updateWorkoutList = (key, newWorkoutItem) => {
    setWorkoutList((prev) => ({ ...prev, [key]: newWorkoutItem }))
  }

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/workoutdata")
        const { upperBody, cardio, abs, legs } = data
        if (upperBody || cardio || abs || legs) {
          setWorkoutList({ ...data })
        }
      } catch (error) {
        console.error("Error fetching workouts:", error)
      }
    }
    getWorkouts()
  }, [])
  return (
    <WorkingOutContext.Provider
      value={{
        workoutList,
        updateWorkoutList,
      }}
    >
      {children}
    </WorkingOutContext.Provider>
  )
}

export default WorkoutContext
