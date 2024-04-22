const mongoose = require("mongoose")

const workoutListSchema = new mongoose.Schema({
  upperBody: [
    {
      type: String,
    },
  ],
  abs: [
    {
      type: String,
    },
  ],
  cardio: [
    {
      type: String,
    },
  ],
  legs: [
    {
      type: String,
    },
  ],
  duration: [
    {
      type: String,
    },
  ],
  repetitions: [{ type: Number }],
})

const WorkoutListModel = mongoose.model("WorkoutList", workoutListSchema)

module.exports = WorkoutListModel
