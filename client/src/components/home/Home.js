import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import bodyBuilder from "./body_builder.jpg"

import "./Home.css"
import axios from "axios"
import { WorkingOutContext } from "../../context/WorkoutContext"

const Home = () => {
  const { workoutList, updateWorkoutList } = useContext(WorkingOutContext)
  const { abs, cardio, legs, upperBody } = workoutList
  const [localUpdateToggle, setLocalUpdateToggle] = useState(false)
  const [localDeleteToggle, setLocalDeleteToggle] = useState(false)
  return (
    <div className="background-video">
      <img className="bgImage" src={bodyBuilder} alt="" />
      <div className="links">
        <div>
          <Link to="/upperBody" className="color">
            UpperBody
          </Link>
        </div>
        <div className="color">
          <Link to="/Legs" className="color">
            Legs
          </Link>
        </div>
        <div className="color">
          <Link to="/Cardio" className="color">
            Cardio
          </Link>
        </div>
        <div className="color">
          <Link to="/Abs" className="color">
            Abs
          </Link>
        </div>
      </div>
      <div className="externalContainer">
        <div className="workoutListItemsContainer">
          <div className="itemBox">
            <h2>Upper Body</h2>
            {upperBody &&
              upperBody?.map((item, index) => (
                <div key={index} className="workoutItem">
                  <button className="workoutItem">{item}</button>
                </div>
              ))}
          </div>
          <div className="itemBox">
            <h2>Cardio</h2>
            {cardio &&
              cardio?.map((item, index) => (
                <div key={index} className="workoutItem" onClick={() => setLocalDeleteToggle(!localDeleteToggle)}>
                  <button className="workoutItem">{item}</button>
                </div>
              ))}
          </div>
          <div className="itemBox">
            <h2>Abs</h2>
            {abs &&
              abs?.map((item, index) => (
                <div key={index} className="workoutItem">
                  <button className="workoutItem">{item}</button>
                </div>
              ))}
          </div>
          <div className="itemBox">
            <h2>Legs</h2>
            {legs &&
              legs?.map((item, index) => (
                <div key={index} className="workoutItem">
                  <div>
                    <button className="workoutItem">{item}</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
