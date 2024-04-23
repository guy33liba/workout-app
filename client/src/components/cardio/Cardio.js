import React, { useContext, useEffect, useState } from "react"
import cardio_Workout from "./videos/cardioWorkout.mp4"
import ChairWorkout from "./videos/ChairWorkouttoLoseBellyFat.mp4"
import fatBurner from "./videos/fatBurner.mp4"
import jumpingJacks from "./videos/jumpingJacks.mp4"
import bodyBuilder from "./videos/body_builder.jpg"
import "./Cardio.css"
import axios from "axios"
import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { WorkingOutContext } from "../../context/WorkoutContext"
const Cardio = () => {
  const { workoutList, updateWorkoutList } = useContext(WorkingOutContext)
  const [localStateCardio, setLocalStateCardio] = useState("")
  const [commentsInput, setCommentsInput] = useState("")

  const postWorkouts = async () => {
    const { data } = await axios.post("http://localhost:4000/workoutdata/cardio", {
      cardio: localStateCardio,
    })
    updateWorkoutList(data, localStateCardio)
  }
  console.log(workoutList)

  return (
    <div>
      <Link to="/">
        <FaArrowAltCircleLeft size={100} className="icon" />
      </Link>

      <div className="selecting-container">
        <div className="selecting">
          <select value={localStateCardio} onChange={(e) => setLocalStateCardio(e.target.value)}>
            <option value="" disabled>
              choose Workout...
            </option>
            <option value="Chair_Workout">Chair_Workout</option>
            <option value="cardio_Workout">cardio_Workout</option>
            <option value="fat_Burner">fat_Burner</option>
            <option value="jumping_Jacks">jumpingJacks</option>
          </select>
        </div>
        <div className="videos">
          {localStateCardio === "fat_Burner" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={fatBurner} type="video/mp4" />
            </video>
          )}
          {localStateCardio === "Chair_Workout" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={ChairWorkout} type="video/mp4" />
            </video>
          )}
          {localStateCardio === "cardio_Workout" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={cardio_Workout} type="video/mp4" />
            </video>
          )}
          {localStateCardio === "jumping_Jacks" && (
            <video className="videos" autoPlay muted width="700" height="500" controls>
              <source src={jumpingJacks} type="video/mp4" />
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
              <button
                onClick={() => {
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

export default Cardio
