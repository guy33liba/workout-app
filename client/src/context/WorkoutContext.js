import React, { useState, createContext } from "react"

export const WorkingOutContext = createContext()
const WorkoutContext = ({ children }) => {
  const [workoutList, setWorkoutList] = useState([])
  const [workoutComments, setWorkoutComments] = useState([])
  const [abs, setAbs] = useState([])
  const [legs, setLegs] = useState([])
  const [upperBody, setUpperBody] = useState([])
  const [cardio, setCardio] = useState([])
  return (
    <WorkingOutContext.Provider
      value={{
        workoutList,
        workoutComments,
        abs,
        legs,
        upperBody,
        cardio,
        setWorkoutList,
        setWorkoutComments,
        setAbs,
        setLegs,
        setUpperBody,
        setCardio,
      }}
    >
      {children}
    </WorkingOutContext.Provider>
  )
}

export default WorkoutContext
