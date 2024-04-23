import React, { useContext, useEffect, useState } from "react"
import shoulders from "./videos/shoulders.mp4"
import biceps from "./videos/biceps.mp4"
import benchPress from "./videos/bench-press.mp4"
import traps from "./videos/traps.mp4"
import triceps from "./videos/triceps.mp4"
import delts from "./videos/delts.mp4"
import bodyBuilder from "./videos/body_builder.jpg"

import axios from "axios"
import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import "./UpperBody.css"
import { WorkingOutContext } from "../../context/WorkoutContext"
const UpperBody = () => {
  const { workoutList, updateWorkoutList } = useContext(WorkingOutContext)
  const [localStateUpperBody, setLocalStateUpperBody] = useState("")
  const [commentsInput, setCommentsInput] = useState("")
  const postWorkouts = async () => {
    const { data } = await axios.post("http://localhost:4000/workoutdata", {
      upperBody: localStateUpperBody,
      commentsInput,
    })

    updateWorkoutList(data.upperBody, localStateUpperBody)
  }
  return (
    <div>
      <Link to="/">
        <FaArrowAltCircleLeft size={100} className="icon" />
      </Link>

      <div className="selecting-container">
        <div className="selecting">
          <select value={localStateUpperBody} onChange={(e) => setLocalStateUpperBody(e.target.value)}>
            <option value="" disabled>
              choose Workout...
            </option>
            <option value="Deltoids">Deltoids</option>
            <option value="biceps_dumbell">biceps_dumbell</option>
            <option value="triceps_dumbell">triceps_dumbell</option>
            <option value="traps_dumbells">traps_dumbells</option>
            <option value="bench_Press">Bench Press</option>
            <option value="dumbells_shoulders">dumbells_shoulders</option>
          </select>
        </div>
        <div className="videos">
          {localStateUpperBody === "Deltoids" && (
            <video className="videos" autoPlay muted width="800" height="500" controls>
              <source src={delts} type="video/mp4" />
            </video>
          )}
          {localStateUpperBody === "biceps_dumbell" && (
            <video className="videos" autoPlay muted width="800" height="500" controls>
              <source src={biceps} type="video/mp4" />
            </video>
          )}
          {localStateUpperBody === "triceps_dumbell" && (
            <video className="videos" autoPlay muted width="800" height="500" controls>
              <source src={triceps} type="video/mp4" />
            </video>
          )}
          {localStateUpperBody === "traps_dumbells" && (
            <video className="videos" autoPlay muted width="800" height="500" controls>
              <source src={traps} type="video/mp4" />
            </video>
          )}
          {localStateUpperBody === "bench_Press" && (
            <video className="videos" autoPlay muted width="800" height="500" controls>
              <source src={benchPress} type="video/mp4" />
            </video>
          )}
          {localStateUpperBody === "dumbells_shoulders" && (
            <video className="videos" autoPlay muted width="800" height="500" controls>
              <source src={shoulders} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div className="commnets-container">
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
              <button
                onClick={() => {
                  setCommentsInput((list) => {
                    return { ...list, commentsInput }
                  })
                  postWorkouts()
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

export default UpperBody
