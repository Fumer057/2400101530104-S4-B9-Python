import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   const [isOn, setIsOn] = useState(false);

  function fun() {
    setIsOn(!isOn); 
  }

  return (
    <>
    <h1>Toggle Button</h1>
      <h3>{isOn ? "ON" : "OFF"}</h3>

      <button onClick={fun}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
      
    </>
  )
}

export default App
