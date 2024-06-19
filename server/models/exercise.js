import { mongoose } from "mongoose"
const { Schema } = mongoose

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
})

const Exercise = mongoose.model("Exercise", exerciseSchema)

export default Exercise
