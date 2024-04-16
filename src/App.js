import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./workout-app/components/home/Home"
import UpperBody from "./workout-app/components/upper-body/UpperBody"
import Legs from "./workout-app/components/legs/Legs"
import Cardio from "./workout-app/components/cardio/Cardio"
import Abs from "./workout-app/components/abs/Abs"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upperbody" element={<UpperBody />} />
        <Route path="/legs" element={<Legs />} />
        <Route path="/abs" element={<Abs />} />
        <Route path="/cardio" element={<Cardio />} />
      </Routes>
    </Router>
  )
}

export default App
