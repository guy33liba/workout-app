const mongoose = require("mongoose")

const workoutPlanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  weekNumber: Number,
  workouts: {
    sunday: String,
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
  },
})

module.exports = mongoose.model("WorkoutPlan", workoutPlanSchema)
