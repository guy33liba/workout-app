const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
app.use(cors())
app.use(express.json())

 const mongoUrl =
   "mongodb+srv://guy33liba:Aa123123@workout.6vzljfv.mongodb.net/?retryWrites=true&w=majority&appName=workout"
 mongoose.connect(mongoUrl)

 const commentSchema = new mongoose.Schema({
   upperBody: String,
   abs: String,
   cardio: String,
   legs: String,
   commentsInput: String,
 })
 const Comment = mongoose.model("WorkOut", commentSchema)
const workoutsCommentsAndLists = []

 app.post("/comments", (req, res) => {
   const { upperBody, abs, cardio, legs, comments } = req.body
   const newComment = new Comment({ upperBody, abs, cardio, legs, comments })
   newComment.save().then((comment) => {
     workoutsComments.push(comment)
     res.send(workoutsComments)
   })
 })
app.post("/comments", (req, res) => {
  const { upperBody, abs, cardio, legs, comments } = req.body
  workoutsCommentsAndLists.push(upperBody, abs, cardio, legs, comments)
  res.send(workoutsCommentsAndLists)
})
console.log(workoutsCommentsAndLists)
 app.put("/comments/:id", (req, res) => {
   const { id } = req.params.id
   const { upperBody, abs, cardio, legs } = req.body
   const updatedComment = { upperBody, abs, cardio, legs }

  Comment.findByIdAndUpdate(id, updatedComment, { new: true }, (err, comment) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(comment)
    }
  })
})
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params
  Comment.findByIdAndDelete(id, (err, deletedComment) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(deletedComment)
    }
  })
})
app.get("/comments", async (req, res) => {
  res.send(workoutsCommentsAndLists)
  try {
    const comments = await Comment.find({})
    res.send(comments)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.listen(4000)
