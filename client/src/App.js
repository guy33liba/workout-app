import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/home/Home"
import Legs from "./components/legs/Legs"
import Abs from "./components/abs/Abs"
import Cardio from "./components/cardio/Cardio"
import UpperBody from "./components/upper-body/UpperBody"
import WorkoutContext from "./context/WorkoutContext"
const App = () => {
  return (
    <WorkoutContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upperbody" element={<UpperBody />} />
          <Route path="/legs" element={<Legs />} />
          <Route path="/abs" element={<Abs />} />
          <Route path="/cardio" element={<Cardio />} />
        </Routes>
      </Router>
    </WorkoutContext>
  )
}

export default App
