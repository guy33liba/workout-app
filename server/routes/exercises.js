import express from "express";
import Exercise from "../models/exercise.js";

const router = express.Router();

// GET all exercises
router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    console.error('Error fetching exercises:', err);
    res.status(500).json({ message: err.message });
  }
});

// Add a new exercise
router.post("/", async (req, res) => {
  const { name, reps } = req.body;

  // Validate request body
  if (!name || !reps) {
    return res.status(400).json({ message: "Name and reps are required" });
  }

  const exercise = new Exercise({ name, reps });

  try {
    const newExercise = await exercise.save();
    res.status(201).json(newExercise);
  } catch (err) {
    console.error('Error saving exercise:', err);
    res.status(400).json({ message: err.message });
  }
});

export default router;
