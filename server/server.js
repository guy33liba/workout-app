const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
app.use(cors())
app.use(express.json())
const Workout = require("./workoutListSchema")

const mongoUrl =
  "mongodb+srv://guy33liba:Aa123123@workout.6vzljfv.mongodb.net/?retryWrites=true&w=majority&appName=workout"
mongoose.connect(mongoUrl)

app.post("/workoutdata/upperbody", async (req, res) => {
  const { upperBody } = req.body
  const workout = new Workout({
    upperBody,
  })
  await workout.save()
})
app.post("/workoutdata/cardio", async (req, res) => {
  const { cardio } = req.body
  const workout = new Workout({
    cardio,
  })
  await workout.save()
})
app.post("/workoutdata/abs", async (req, res) => {
  const { abs } = req.body
  const workout = new Workout({
    abs,
  })
  await workout.save()
  res.send(workout)
})
app.post("/workoutdata/legs", async (req, res) => {
  const { legs } = req.body
  const workout = new Workout({
    legs,
  })
  await workout.save()
  res.send(workout)
})

//
///
app.get("/workoutdata/cardio", async (req, res) => {
  const newCardio = await Workout.find({})
  res.send(newCardio)
})
app.get("/workoutdata/upperbody", async (req, res) => {
  const newUpperbody = await Workout.find({})
  res.send(newUpperbody)
})
app.get("/workoutdata/abs", async (req, res) => {
  const newAbs = await Workout.find({})
  res.send(newAbs)
})
app.get("/workoutdata/legs", async (req, res) => {
  const newLegs = await Workout.find({})
  res.send(newLegs)
})

//
//
app.put("/workoutdata/:id", async (req, res) => {
  const { id } = req.params
  const { upperBody, abs, cardio, legs } = req.body || ""
  try {
    const updatedComment = await Workout.findByIdAndUpdate(id, { upperBody, abs, cardio, legs }, { new: true })
    res.send(updatedComment)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.delete("/workoutdata/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deletedComment = await Workout.findByIdAndDelete(id)
    res.send(deletedComment)
  } catch (err) {
    res.status(500).send(err)
  }
})
app.listen(4000)
