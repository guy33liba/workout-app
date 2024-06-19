// import React, { useState } from "react"
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import Home from "./components/home/Home"
// import Legs from "./components/legs/Legs"
// import Abs from "./components/abs/Abs"
// import Cardio from "./components/cardio/Cardio"
// import UpperBody from "./components/upper-body/UpperBody"
// import WorkoutContext from "./context/WorkoutContext"
// const App = () => {
//   return (
//     <WorkoutContext>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/upperbody" element={<UpperBody />} />
//           <Route path="/legs" element={<Legs />} />
//           <Route path="/abs" element={<Abs />} />
//            <Route path="/cardio" element={<Cardio />} />
//         </Routes>
//       </Router>
//     </WorkoutContext>
//   )
// }

// export default App
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components2/Navbar"
import ExerciseList from "./components2/ExerciseList"
import AddExercise from "./components2/AddExercise"
import "./App.css"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ExerciseList />} />
        <Route path="/add" element={<AddExercise />} />
      </Routes>
    </Router>
  )
}

export default App
