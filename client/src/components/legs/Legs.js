import React, { useContext, useEffect, useState } from "react"
import barbellSquat from "./videos/barbellSquat.mp4"
import barOneLeggedDeadlift from "./videos/barOneLeggedDeadlift.mp4"
import cableDonkeyKickback from "./videos/cableDonkeyKickback.mp4"
import dumbellGoblet from "./videos/dumbellGoblet.mp4"
import dumbellWalking from "./videos/dumbellWalking.mp4"
import singleInverseLeg from "./videos/singleInverseLeg.mp4"
import InverseLegCurlBenchPads from "./videos/InverseLegCurlBenchPads.mp4"
import splitSquat from "./videos/splitSquat.mp4"
import bodyBuilder from "./videos/body_builder.jpg"

import axios from "axios"
import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import "./Legs.css"
import { WorkingOutContext } from "../../context/WorkoutContext"
const Legs = () => {
  const { workoutList, updateWorkoutList } = useContext(WorkingOutContext)

  const [commentsInput, setCommentsInput] = useState("")
  const { legs } = workoutList
  const [localStateLegs, setLocalStateLegs] = useState("")

  const postWorkouts = async () => {
    const { data } = await axios.post("http://localhost:4000/workoutdata", {
      legs: localStateLegs,
      commentsInput,
    })
    updateWorkoutList(data.legs, localStateLegs)
  }
  return (
    <div>
      <Link to="/">
        <FaArrowAltCircleLeft size={100} className="icon" />
      </Link>

      <div className="selecting-container">
        <div className="selecting">
          <select value={localStateLegs} onChange={(e) => setLocalStateLegs(e.target.value)}>
            <option value="" disabled>
              choose Workout...
            </option>
            <option value="barbell Squat">barbell_Squat</option>
            <option value="bar One Legged lift">bar One_Legged Deadlift</option>
            <option value="cable Donkey ">cable Donkey_Kickback</option>
            <option value="dumbell Goblet">dumbell_Goblet</option>
            <option value="dumbell Walking">dumbell_Walking</option>
            <option value="Inverse Leg Curl">Inverse_Leg Curl BenchPads</option>
            <option value="split Squat">split_Squat</option>
          </select>
        </div>
        <div className="videos">
          {localStateLegs === "barbell Squat" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={barbellSquat} type="video/mp4" />
            </video>
          )}
          {localStateLegs === "bar One Legged lift" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={barOneLeggedDeadlift} type="video/mp4" />
            </video>
          )}
          {localStateLegs === "cable Donkey " && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={cableDonkeyKickback} type="video/mp4" />
            </video>
          )}
          {localStateLegs === "dumbell Goblet" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={dumbellGoblet} type="video/mp4" />
            </video>
          )}
          {localStateLegs === "dumbell Walking" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={dumbellWalking} type="video/mp4" />
            </video>
          )}
          {localStateLegs === "Inverse Leg Curl" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={InverseLegCurlBenchPads} type="video/mp4" />
            </video>
          )}
          {localStateLegs === "split Squat" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={splitSquat} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div>
        <div class="background-video">
        <img className="bgImage" src={bodyBuilder} alt="" />

          <div className="comments">
            <div classNazme="header">tell me how to workout better </div>
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

export default Legs
