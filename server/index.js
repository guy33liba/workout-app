import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

// MongoDB connection
const dbURI =
  "mongodb+srv://guy33liba:g33g33g33@workout.6vzljfv.mongodb.net/?retryWrites=true&w=majority&appName=workout"
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err))

// Define a workout schema and model
const workoutSchema = new mongoose.Schema({
  name: String,
  type: String,
  duration: Number, // in minutes
  date: { type: Date, default: Date.now },
})

const Workout = mongoose.model("Workout", workoutSchema)

// CRUD operations
app.post("/workouts", async (req, res) => {
  const workout = new Workout(req.body)
  try {
    const savedWorkout = await workout.save()
    res.status(201).send(savedWorkout)
  } catch (err) {
    res.status(400).send(err)
  }
})

app.get("/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find({})
    res.status(200).send(workouts)
  } catch (err) {
    res.status(400).send(err)
  }
})

app.delete("/workouts/:id", async (req, res) => {
  try {
    const removedWorkout = await Workout.findByIdAndDelete(req.params.id)
    res.status(200).send(removedWorkout)
  } catch (err) {
    res.status(400).send(err)
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
