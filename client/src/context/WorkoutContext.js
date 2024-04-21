import React, { useState, createContext } from "react"

export const WorkingOutContext = createContext()

const WorkoutContext = ({ children }) => {
  const [workoutList, setWorkoutList] = useState({
    cardio: [],
    upperBody: [],
    abs: [],
    legs: [],
  })

  const updateWorkoutList = (key, newValue) => {
    setWorkoutList((prevWorkoutList) => ({
      ...prevWorkoutList,
      [key]: newValue,
    }))
  }

  return (
    <WorkingOutContext.Provider
      value={{
        workoutList,
        updateWorkoutList,
      }}>
      {children}
    </WorkingOutContext.Provider>
  )
}

export default WorkoutContext
