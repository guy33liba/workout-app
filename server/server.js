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

const newWorkout = {
  upperBody: [],
  abs: [],
  legs: [],
  cardio: [],
}
const createNewSomeThing = async () => {
  if (!(await Workout.findOne({}))) {
    new Workout(newWorkout).save()
  }
}
createNewSomeThing()
app.post("/workoutdata/upperbody", async (req, res) => {
  const { upperBody } = req.body
  const newArray = await Workout.findOne({}).lean()
  newArray.upperBody.push(upperBody)

  const kaka = await Workout.updateOne({ id: newArray._id }, { upperBody: newArray })
  res.send(kaka)
})
// app.post("/workoutdata/cardio", async (req, res) => {
//   const { cardio } = req.body
//   const workout = new Workout({
//     cardio,
//   })
//   await workout.save()
//   res.send(workout)
// })
// app.post("/workoutdata/abs", async (req, res) => {
//   const { abs } = req.body
//   const workout = new Workout({
//     abs,
//   })
//   await workout.save()
//   res.send(workout)
// })
// app.post("/workoutdata/legs", async (req, res) => {
//   const { legs } = req.body
//   const workout = new Workout({
//     legs,
//   })
//   await workout.save()
//   res.send(workout)
// })

//
///
app.get("/workoutdata/cardio", async (req, res) => {
  const newCardio = await Workout.findOne({})
  res.send(newCardio)
})
app.get("/workoutdata/upperbody", async (req, res) => {
  const newUpperbody = await Workout.findOne({})
  res.send(newUpperbody)
})
app.get("/workoutdata/abs", async (req, res) => {
  const newAbs = await Workout.findOne({})
  res.send(newAbs)
})
app.get("/workoutdata/legs", async (req, res) => {
  const newLegs = await Workout.findOne({})
  res.send(newLegs)
})

//
//

app.listen(4000)
