import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import bodyBuilder from "../upper-body/videos/body-builder.mp4"
import "./Home.css"
import axios from "axios"
import { WorkingOutContext } from "../../context/WorkoutContext"

const Home = () => {
  const { workoutList, updateWorkoutList } = useContext(WorkingOutContext)
  const { abs, legs, upperBody, cardio } = workoutList
  const getWorkouts = async () => {
    const { data } = await axios.get("http://localhost:4000/workoutdata")
    updateWorkoutList(data)
    console.log(data)
  }
  useEffect(() => {
    getWorkouts()
  }, [])
  console.log(workoutList)
  return (
    <div className="background-video">
      <video muted loop id="bgVideo">
        <source src={bodyBuilder} type="video/mp4" />
      </video>

      <div className="links">
        <div>
          <Link to="/" className="color">
            Home
          </Link>
        </div>
        <div>
          <Link to="/upperBody" className="color">
            UpperBody
          </Link>
        </div>
        <div>
          <Link to="/Legs" className="color">
            Legs
          </Link>
        </div>
        <div>
          <Link to="/Cardio" className="color">
            Cardio
          </Link>
        </div>
        <div>
          <Link to="/Abs" className="color">
            Abs
          </Link>
        </div>
      </div>
      <div>
        {abs || legs || cardio || upperBody ? (
          <>
            <div className="externalContainer">
              <div className="workoutListItemsContainer">
                <div></div>
              </div>
              <div></div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Home
