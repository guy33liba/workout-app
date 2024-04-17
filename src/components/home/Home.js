import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import bodyBuilder from "../upper-body/videos/body-builder.mp4"
import "./Home.css"
import Comments from "../../Comments"
import axios from "axios"
import { WorkOutData } from "../../App"

const Home = () => {
  const {
    workoutList,
    setWorkoutList,
    abs,
    cardio,
    legs,
    upperBody,
    workoutComments,
    setWorkoutComments,
  } = useContext(WorkOutData)
  const getWorkouts = async () => {
    const { data } = await axios.get("http://localhost:4000/comments")
    setWorkoutList(data)
    setWorkoutComments(data)
  }
  useEffect(() => {
    getWorkouts()
  }, [])
  return (
    <div className="background-video">
      <video autoplay muted loop id="bgVideo">
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
            {workoutList.map((item, index) => (
              <div key={index}>{item.comments}</div>
            ))}
            {workoutComments.map((item, index) => (
              <div key={index}>{item.abs}</div>
            ))}
          </>
        ) : null}
      </div>
      <Comments getWorkouts={getWorkouts} />
    </div>
  )
}

export default Home
