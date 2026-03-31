import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
function callfunction()
        {
            alert("function call")
        }
function apple(){
  alert(" you have clicked on apple")
}

function banana(){
  alert(" you have clicked on banana")
}

  return (
      <>
     <h2>welcome in new project</h2>
     <button onClick={apple}>apple</button>
     <button onClick={banana}>banana</button>
     <button onClick={callfunction}>ok</button>
     </>
  )
}
export default App
