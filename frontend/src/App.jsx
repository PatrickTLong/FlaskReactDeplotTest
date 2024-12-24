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
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <form>
          <input onChange={ValChange} value={value.name} type='text'>
          </input>
        <button onClick={Send}>
          Submit
        </button>
        </form>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
