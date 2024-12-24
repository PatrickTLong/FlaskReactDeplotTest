import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {
  const [value, setvalue] = useState({name : ""})

  function ValChange(e) {
    setvalue(prev => ({...prev, name : e.target.value }))
  }

  function Send(e) {
    e.preventDefault()
    axios.post("https://flaskreactdeplottest.onrender.com/namestore", value)
    setvalue(prev => ({...prev, name : "" }))
  }


  return (
    <>
      <h1>Hey Mom and Michael!</h1>
      <div className="card">
        <form>
          <input onChange={ValChange} value={value.name} type='text'>
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
