import React, { useState } from "react"
import axios from "axios"

const AddExercise = () => {
  const [name, setName] = useState("")
  const [reps, setReps] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("/exercises", { name, reps })
      .then((response) => console.log(response))
      .catch((error) => console.error("Error adding exercise:", error))
  }

  return (
    <div>
      <h2>Add Exercise</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="label">Name:</div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <div className="label">Reps:</div>
          <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} required />
        </div>
        <button type="submit">Add Exercise</button>
      </form>
    </div>
  )
}

export default AddExercise
