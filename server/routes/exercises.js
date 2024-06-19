import express from "express"

import Exercise from "../models/exercise.js"

const router = express.Router()
router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find()
    res.json(exercises)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Add a new exercise
router.post("/", async (req, res) => {
  const { name, reps } = req.body
  const exercise = new Exercise(name, reps)
  try {
    const newExercise = await exercise.save()
    res.status(201).json(newExercise)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
