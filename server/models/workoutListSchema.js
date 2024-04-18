const mongoose = require("mongoose")

const workoutListSchema = new mongoose.Schema({
  upperBody: [
    {
      type: String,
      // You can add more validation or options here if needed
    },
  ],
  abs: [
    {
      type: String,
      // You can add more validation or options here if needed
    },
  ],
  cardio: [
    {
      type: String,
      // You can add more validation or options here if needed
    },
  ],
  legs: [
    {
      type: String,
      // You can add more validation or options here if needed
    },
  ],
  // Add more properties as needed
})

const WorkoutList = mongoose.model("WorkoutList", workoutListSchema)

module.exports = WorkoutList
