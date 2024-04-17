import React, { useContext, useEffect, useState } from "react"
import barbellSquat from "./videos/barbellSquat.mp4"
import barOneLeggedDeadlift from "./videos/barOneLeggedDeadlift.mp4"
import cableDonkeyKickback from "./videos/cableDonkeyKickback.mp4"
import dumbellGoblet from "./videos/dumbellGoblet.mp4"
import dumbellWalking from "./videos/dumbellWalking.mp4"
import singleInverseLeg from "./videos/singleInverseLeg.mp4"
import InverseLegCurlBenchPads from "./videos/InverseLegCurlBenchPads.mp4"
import splitSquat from "./videos/splitSquat.mp4"
import bodyBuilder from "./videos/body-builder.mp4"
import axios from "axios"
import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import "./Legs.css"
import { WorkingOutContext } from "../../context/WorkoutContext"
const Legs = () => {
  const { workoutList, setWorkoutList, legs, setLegs, setWorkoutComments, wokrcomments } =
    useContext(WorkingOutContext)

  const [commentsInput, setCommentsInput] = useState("")

  const getWorkouts = async () => {
    const { data } = await axios.get("http://localhost:4000/comments")
    setWorkoutList(data)
    setWorkoutComments(data)
  }
  const postWorkouts = async () => {
    const { data } = await axios.get("http://localhost:4000/comments", {
      legs,
      commentsInput,
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
          <select value={legs} onChange={(e) => setLegs(e.target.value)}>
            <option value="" disabled>
              choose Workout...
            </option>
            <option value="barbellSquat">barbell Squat</option>
            <option value="barOneLeggedDeadlift">bar One Legged Deadlift</option>
            <option value="cableDonkeyKickback">cable Donkey Kickback</option>
            <option value="dumbellGoblet">dumbell Goblet</option>
            <option value="dumbellWalking">dumbell Walking</option>
            <option value="InverseLegCurlBenchPads">Inverse Leg Curl BenchPads</option>
            <option value="splitSquat">split Squat</option>
          </select>
        </div>
        <div className="videos">
          {legs === "barbellSquat" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={barbellSquat} type="video/mp4" />
            </video>
          )}
          {legs === "barOneLeggedDeadlift" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={barOneLeggedDeadlift} type="video/mp4" />
            </video>
          )}
          {legs === "cableDonkeyKickback" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={cableDonkeyKickback} type="video/mp4" />
            </video>
          )}
          {legs === "dumbellGoblet" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={dumbellGoblet} type="video/mp4" />
            </video>
          )}
          {legs === "dumbellWalking" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={dumbellWalking} type="video/mp4" />
            </video>
          )}
          {legs === "InverseLegCurlBenchPads" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={InverseLegCurlBenchPads} type="video/mp4" />
            </video>
          )}
          {legs === "splitSquat" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={splitSquat} type="video/mp4" />
            </video>
          )}
          {legs === "singleInverseLeg" && (
            <video className="videos" autoPlay muted width="700" height="700" controls>
              <source src={singleInverseLeg} type="video/mp4" />
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
                placeholder="Share Your Tip With Us .."></textarea>
              <button
                onClick={() => {
                  setWorkoutComments((comments) => [...comments, commentsInput])
                  getWorkouts()
                }}
                style={{ fontSize: "30px" }}>
                Upload Comments
              </button>
              <button
                onClick={() => {
                  setWorkoutList((list) => [...list, legs])
                  getWorkouts()
                }}
                style={{ fontSize: "30px" }}>
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
