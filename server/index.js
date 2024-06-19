import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import exercisesRouter from "./routes/exercises.js"
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
mongoose.connect(
  "mongodb+srv://guy33liba:<password>@workout.6vzljfv.mongodb.net/?retryWrites=true&w=majority&appName=workout",
)

app.use(cors())

app.use("/exercises", exercisesRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
