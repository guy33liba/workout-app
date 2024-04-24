import React, { useContext, useEffect, useState } from "react"
import "./Abs.css"
import punchesAbs from "./videos/punchesAbs.mp4"
import raisingLegs from "./videos/raisingLegs.mp4"
import standingAbs from "./videos/standingAbs.mp4"
import rollerAbsExercise from "./videos/rollerAbsExercise.mp4"
import generalAbsWorkout from "./videos/generalAbsWorkout.mp4"
import bodyBuilder from "./videos/body_builder.jpg"

import axios from "axios"
import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { WorkingOutContext } from "../../context/WorkoutContext"
const Abs = () => {
  const { workoutList, updateWorkoutList } = useContext(WorkingOutContext)
  const [localStateAbs, setLocalStateAbs] = useState("")
  const [commentsInput, setCommentsInput] = useState("")

  const postWorkouts = async () => {
    const { data } = await axios.post("http://localhost:4000/workoutdata/abs", {
      abs: localStateAbs,
      comments: commentsInput,
    })
    updateWorkoutList(data.abs, localStateAbs)
  }

  return (
    <div>
      <Link to="/">
        <FaArrowAltCircleLeft size={100} className="icon" />
      </Link>

      <div className="selecting-container">
        <div className="selecting">
          <select value={localStateAbs} onChange={(e) => setLocalStateAbs(e.target.value)}>
            <option value="" disabled>
              choose Workout...
            </option>
            <option value="punches_Abs">punches_Abs</option>
            <option value="raising_Legs">raising_Legs</option>
            <option value="standing_Abs">standing_Abs</option>
            <option value="roller_Abs_Exercise">roller_Abs_Exercise</option>
            <option value="general_Abs_Workout">General Abs Workout</option>
          </select>
        </div>
        <div className="videos">
          {localStateAbs === "punches_Abs" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={punchesAbs} type="video/mp4" />
            </video>
          )}
          {localStateAbs === "raising_Legs" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={raisingLegs} type="video/mp4" />
            </video>
          )}
          {localStateAbs === "standing_Abs" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={standingAbs} type="video/mp4" />
            </video>
          )}
          {localStateAbs === "roller_Abs_Exercise" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={rollerAbsExercise} type="video/mp4" />
            </video>
          )}
          {localStateAbs === "general_Abs_Workout" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={generalAbsWorkout} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div>
        <div className="background-video">
          <img className="bgImage" src={bodyBuilder} alt="" />
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
                  postWorkouts()
                }}
                style={{ fontSize: "30px" }}
              >
                Upload Comments
              </button>
              <Link to="/">
                <button
                  onClick={() => {
                    postWorkouts()
                  }}
                  style={{ fontSize: "30px" }}
                >
                  Upload Workout List
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abs
