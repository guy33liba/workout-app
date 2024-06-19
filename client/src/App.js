import React, { useState, useEffect } from "react"
import { fetchWorkouts } from "./api"
import AddWorkoutForm from "./components/AddWorkoutForm"
import WorkoutList from "./components/WorkoutList"
import "./App.css"

const App = () => {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    loadWorkouts()
  }, [])

  const loadWorkouts = async () => {
    try {
      const data = await fetchWorkouts()
      setWorkouts(data)
    } catch (error) {
      console.error("Error fetching workouts", error)
    }
  }

  return (
    <div className="container">
      <h1>Workout Tracker</h1>
      <AddWorkoutForm onAdd={loadWorkouts} />
      <WorkoutList workouts={workouts} onDelete={loadWorkouts} />
    </div>
  )
}

export default App
