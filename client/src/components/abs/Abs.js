import React, { useContext, useEffect, useState } from "react"
import "./Abs.css"
import punchesAbs from "./videos/punchesAbs.mp4"
import raisingLegs from "./videos/raisingLegs.mp4"
import standingAbs from "./videos/standingAbs.mp4"
import rollerAbsExercise from "./videos/rollerAbsExercise.mp4"
import generalAbsWorkout from "./videos/generalAbsWorkout.mp4"
import bodyBuilder from "./videos/body-builder.mp4"
import axios from "axios"
import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { WorkingOutContext } from "../../context/WorkoutContext"
const Abs = () => {
  const { workoutList, setWorkoutList, abs, setAbs, setWorkoutComments, workoutComments } =
    useContext(WorkingOutContext)

  const [commentsInput, setCommentsInput] = useState("")
  const getWorkouts = async () => {
    const { data } = await axios.get("http://localhost:4000/comments")
    setWorkoutList(data)
    setWorkoutComments(data)
  }
  const postWorkouts = async () => {
    const { data } = await axios.get("http://localhost:4000/comments", {
      abs: abs,
      comments: commentsInput,
    })
    setWorkoutList(data)
  }
  useEffect(() => {
    getWorkouts()
  }, [])
  return (
    <div>
      <Link to="/">
        <FaArrowAltCircleLeft size={100} className="icon" />
      </Link>

      <div className="selecting-container">
        <div className="selecting">
          <select value={abs} onChange={(e) => setAbs(e.target.value)}>
            <option value="" disabled>
              choose Workout...
            </option>
            <option value="ChairWorkouttoLoseBellyFat">Chair Workout</option>
            <option value="cableDonkeyKickback">Cable Donkey Kickback</option>
            <option value="fatBurner">fat Burner</option>
            <option value="jumpingJacks">jumping Jacks</option>
            <option value="generalAbsWorkout">General Abs Workout</option>
          </select>
        </div>
        <div className="videos">
          {abs === "punchesAbs" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={punchesAbs} type="video/mp4" />
            </video>
          )}
          {abs === "raisingLegs" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={raisingLegs} type="video/mp4" />
            </video>
          )}
          {abs === "standingAbs" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={standingAbs} type="video/mp4" />
            </video>
          )}
          {abs === "rollerAbsExercise" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={rollerAbsExercise} type="video/mp4" />
            </video>
          )}
          {abs === "generalAbsWorkout" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={generalAbsWorkout} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div>
        <div class="background-video">
          <video muted loop id="bgVideo">
            <source src={bodyBuilder} type="video/mp4" />
          </video>
          <div className="comments">
            <div className="header">tell me how to workout better </div>
            <div>
              <textarea
                value={commentsInput}
                onChange={(e) => setCommentsInput(e.target.value)}
                id=""
                cols="30"
                rows="10"
                placeholder="Share Your Tip With Us .."
              ></textarea>
              <button
                onClick={() => {
                  setWorkoutComments((comments) => [...comments, commentsInput])
                  getWorkouts()
                  postWorkouts()
                }}
                style={{ fontSize: "30px" }}
              >
                Upload Comments
              </button>
              <button
                onClick={() => {
                  setWorkoutList((list) => [...list, abs])
                  getWorkouts()
                }}
                style={{ fontSize: "30px" }}
              >
                Upload Workout List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abs
