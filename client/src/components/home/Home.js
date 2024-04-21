import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import bodyBuilder from "../upper-body/videos/body-builder.mp4"
import "./Home.css"
import axios from "axios"
import { WorkingOutContext } from "../../context/WorkoutContext"

const Home = () => {
  const { workoutList, updateWorkoutList } = useContext(WorkingOutContext)
  const { abs, cardio, legs, upperBody } = workoutList
  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/workoutdata")
        updateWorkoutList("upperBody", data)
        updateWorkoutList("abs", data)
        updateWorkoutList("legs", data)
        updateWorkoutList("cardio", data)
        console.log(data)
      } catch (error) {
        console.error("Error fetching workouts:", error)
      }
    }

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
          <div className="itemBox">
            <h2>Upper Body</h2>
            {upperBody.map((item, index) => (
              <div key={index} className="workoutItem">
                {item.upperBody}
              </div>
            ))}
          </div>
          <div className="itemBox">
            <h2>Cardio</h2>
            {cardio.map((item, index) => (
              <div key={index} className="workoutItem">
                {item.cardio}
              </div>
            ))}
          </div>
          <div className="itemBox">
            <h2>Abs</h2>
            {abs.map((item, index) => (
              <div key={index} className="workoutItem">
                {item.abs}
              </div>
            ))}
          </div>
          <div className="itemBox">
            <h2>Legs</h2>
            {legs.map((item, index) => (
              <div key={index} className="workoutItem">
                {item.legs}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
