import React, { useEffect, useState } from "react"
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
const Cardio = () => {
  const [workouts, setWorkouts] = useState([])
  const [cardio, setCardio] = useState("")

  const getWorkouts = async () => {
    //   const { data } = await axios.get("http://localhost:4000/comments")
    //   setWorkouts(data)
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
          <select value={cardio} onChange={(e) => setCardio(e.target.value)}>
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
          {cardio === "punchesAbs" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={punchesAbs} type="video/mp4" />
            </video>
          )}
          {cardio === "raisingLegs" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={raisingLegs} type="video/mp4" />
            </video>
          )}
          {cardio === "standingAbs" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={standingAbs} type="video/mp4" />
            </video>
          )}
          {cardio === "rollerAbsExercise" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={rollerAbsExercise} type="video/mp4" />
            </video>
          )}
          {cardio === "generalAbsWorkout" && (
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
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Share Your Tip With Us .."></textarea>
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

export default Cardio
