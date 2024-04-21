import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import bodyBuilder from "../upper-body/videos/body-builder.mp4"
import "./Home.css"
import axios from "axios"
import { WorkingOutContext } from "../../context/WorkoutContext"

const Home = () => {
  const { workoutList, updateWorkoutList } = useContext(WorkingOutContext)
  const { abs, legs, upperBody, cardio } = workoutList

  const getWorkouts = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/workoutdata")
      updateWorkoutList({ abs, legs, upperBody, cardio }, data)
    } catch (error) {
      console.error("Error fetching workouts:", error)
    }
  }

  useEffect(() => {
    getWorkouts()
  }, [])

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
      <div className="externalContainer">
        <div className="workoutListItemsContainer">
          {/* Render workouts for each category */}
          <div>
            <h2>Abs</h2>
            {abs.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div>
            <h2>Legs</h2>
            {legs.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div>
            <h2>Upper Body</h2>
            {upperBody.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div>
            <h2>Cardio</h2>
            {cardio.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
