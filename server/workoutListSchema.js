const mongoose = require("mongoose")

const workoutSchema = new mongoose.Schema({
  cardio: [String],
  upperBody: [String],
  abs: [String],
  legs: [String],
})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout
