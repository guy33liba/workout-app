import React, { useEffect, useState } from "react"
import cardioWorkout from "./videos/cardioWorkout.mp4"
import ChairWorkouttoLoseBellyFat from "./videos/ChairWorkouttoLoseBellyFat.mp4"
import fatBurner from "./videos/fatBurner.mp4"
import jumpingJacks from "./videos/jumpingJacks.mp4"
import bodyBuilder from "./videos/body-builder.mp4"
import "./Cardio.css"
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
            <option value="ChairWorkouttoLoseBellyFat">ChairWorkouttoLoseBellyFat</option>
            <option value="cableDonkeyKickback">cableDonkeyKickback</option>
            <option value="fatBurner">fatBurner</option>
            <option value="jumpingJacks">jumpingJacks</option>
          </select>
        </div>
        <div className="videos">
          {cardio === "fatBurner" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={fatBurner} type="video/mp4" />
            </video>
          )}
          {cardio === "ChairWorkouttoLoseBellyFat" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={ChairWorkouttoLoseBellyFat} type="video/mp4" />
            </video>
          )}
          {cardio === "cardioWorkout" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={cardioWorkout} type="video/mp4" />
            </video>
          )}
          {cardio === "jumpingJacks" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={jumpingJacks} type="video/mp4" />
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
