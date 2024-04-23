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
    const getUpperBodyWorkouts = async () => {
      const { data } = await axios.get("http://localhost:4000/workoutdata/upperbody")
      setWorkoutList((prev) => ({ ...prev, abs: data.upperbody }))
    }
    const getCardioWorkouts = async () => {
      const { data } = await axios.get("http://localhost:4000/workoutdata/cardio")
      setWorkoutList((prev) => ({ ...prev, abs: data.cardio }))
    }
    const getAbsWorkouts = async () => {
      const { data } = await axios.get("http://localhost:4000/workoutdata/abs")
      setWorkoutList((prev) => ({ ...prev, abs: data.abs }))
    }
    const getLegsWorkout = async () => {
      const { data } = await axios.get("http://localhost:4000/workoutdata/legs")
      setWorkoutList({ ...data, abs: data.legs })
    }

    getCardioWorkouts()
    getUpperBodyWorkouts()
    getAbsWorkouts()
    getLegsWorkout()
  }, [])
  console.log(workoutList)
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
