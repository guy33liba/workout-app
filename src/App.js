import React, { createContext, useContext, useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/home/Home"
import Legs from "./components/legs/Legs"
import Abs from "./components/abs/Abs"
import Cardio from "./components/cardio/Cardio"
import UpperBody from "./components/upperbody/UpperBody"
//
export const WorkOutContextList = createContext()
export const WorkOutContextComments = createContext()

const App = () => {
  const [workoutList, setWorkoutList] = useState([])
  const [workoutComments, setWorkoutComments] = useState([])

  return (
    <WorkOutContextComments.Provider value={{ workoutComments, setWorkoutComments }}>
      <WorkOutContextList.Provider value={{ workoutList, setWorkoutList }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upperbody" element={<UpperBody />} />
            <Route path="/legs" element={<Legs />} />
            <Route path="/abs" element={<Abs />} />
            <Route path="/cardio" element={<Cardio />} />
          </Routes>
        </Router>
      </WorkOutContextList.Provider>
    </WorkOutContextComments.Provider>
  )
}

export default App
