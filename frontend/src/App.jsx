import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {
  const [value, setvalue] = useState({name : "", email : ""})

  function ValChange(e) {
    setvalue(prev => ({...prev, name : e.target.value }))
  }
  function ValChangeE(e) {
    setvalue(prev => ({...prev, email : e.target.value }))
  }

  function Send(e) {
    e.preventDefault()
    axios.post("https://flaskreactdeplottest.onrender.com/namestore", value)
    setvalue(prev => ({...prev, name : "" }))
    setvalue(prev => ({...prev, email : "" }))
  }


  return (
    <>
      <h1>Hey Mom and Michael!</h1>
      <div className="card">
        <form>
          <p>Your Name</p>
          <input onChange={ValChange} value={value.name} type='text'>
          </input>
          <p>Email Here</p>
          <input onChange={ValChangeE} value={value.email} type='text'>
          </input>
        <button onClick={Send}>
          Submit
        </button>
        </form>
        
        <p>
          Submit Here ^ Testing to see if i get it ^-^
        </p>
      </div>

    </>
  )
}

export default App
