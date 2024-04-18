const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
app.use(cors())
app.use(express.json())

const mongoUrl =
  "mongodb+srv://guy33liba:Aa123123@workout.6vzljfv.mongodb.net/?retryWrites=true&w=majority&appName=workout"
mongoose.connect(mongoUrl)

const workoutDataSchema = new mongoose.Schema({
  upperBody: String,
  abs: String,
  cardio: String,
  legs: String,
  commentsInput: String,
  workoutList: String,
})
const WorkoutData = mongoose.model("WorkOut", workoutDataSchema)

app.post("/workoutdata", async (req, res) => {
  const { upperBody, abs, cardio, legs, commentsInput, workoutList } = req.body || ""
  try {
    const newComment = new WorkoutData({ upperBody, abs, cardio, legs, commentsInput, workoutList })
    const savedComment = await newComment.save()
    res.send(savedComment)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.put("/workoutdata/:id", async (req, res) => {
  const { id } = req.params
  const { upperBody, abs, cardio, legs } = req.body || ""
  try {
    const updatedComment = await WorkoutData.findByIdAndUpdate(id, { upperBody, abs, cardio, legs }, { new: true })
    res.send(updatedComment)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.delete("/workoutdata/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deletedComment = await WorkoutData.findByIdAndDelete(id)
    res.send(deletedComment)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get("/workoutdata", async (req, res) => {
  try {
    const workoutData = await WorkoutData.find({})
    res.send(workoutData)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.listen(4000)
