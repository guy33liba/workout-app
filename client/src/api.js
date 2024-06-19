import axios from "axios"

const API_URL = "http://localhost:5000/workouts"

export const fetchWorkouts = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error("Error fetching workouts", error)
    throw error
  }
}

export const addWorkout = async (newWorkout) => {
  try {
    await axios.post(API_URL, newWorkout)
  } catch (error) {
    console.error("Error adding workout", error)
    throw error
  }
}

export const deleteWorkout = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`)
  } catch (error) {
    console.error("Error deleting workout", error)
    throw error
  }
}
