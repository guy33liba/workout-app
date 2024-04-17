import React, { useContext, useEffect, useState } from "react"
import shoulders from "./videos/shoulders.mp4"
import biceps from "./videos/biceps.mp4"
import benchPress from "./videos/bench-press.mp4"
import traps from "./videos/traps.mp4"
import triceps from "./videos/triceps.mp4"
import delts from "./videos/delts.mp4"
import bodyBuilder from "./videos/body-builder.mp4"
import axios from "axios"
import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { WorkOutContextList, WorkOutContextComments } from "../../App"
import "./UpperBody.css"
const UpperBody = () => {
  const { workoutList, setWorkoutList } = useContext(WorkOutContextList)
  const { workoutComments, setworkoutComments } = useContext(WorkOutContextComments)
  const [upperBody, setUpperBody] = useState("")

  const getWorkouts = async () => {
    // const { data } = await axios.get("http://localhost:4000/comments")
    // setWorkouts(data)
  }
  useEffect(() => {
    getWorkouts()
  })
  return (
    <div>
      <Link to="/">
        <FaArrowAltCircleLeft size={100} className="icon" />
      </Link>

      <div className="selecting-container">
        <div className="selecting">
          <select value={upperBody} onChange={(e) => setUpperBody(e.target.value)}>
            <option value="" disabled>
              choose Workout...
            </option>
            <option value="delts">Deltoids</option>
            <option value="biceps_dumbell">Biceps</option>
            <option value="triceps_dumbell">Triceps</option>
            <option value="traps_dumbells">Traps</option>
            <option value="benchPress">Bench Press</option>
            <option value="dumbells_shoulders">Shoulders</option>
          </select>
        </div>
        <div className="videos">
          {upperBody === "delts" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={delts} type="video/mp4" />
            </video>
          )}
          {upperBody === "biceps_dumbell" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={biceps} type="video/mp4" />
            </video>
          )}
          {upperBody === "triceps_dumbell" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={triceps} type="video/mp4" />
            </video>
          )}
          {upperBody === "traps_dumbells" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={traps} type="video/mp4" />
            </video>
          )}
          {upperBody === "benchPress" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={benchPress} type="video/mp4" />
            </video>
          )}
          {upperBody === "dumbells_shoulders" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={shoulders} type="video/mp4" />
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
                value={workoutComments}
                id=""
                cols="30"
                rows="10"
                placeholder="Share Your Tip With Us .."
              ></textarea>
              <button onClick={getWorkouts} style={{ fontSize: "30px" }}>
                Upload Comments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpperBody
