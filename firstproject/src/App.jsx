import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  let data="demo"
function updata()
{
  data="example"
  alert(data);
}
   function callfunction()
         {
             alert("function call")
         }
    const fruit=(name)=>
    {
      alert(name)
    }
// function callfunction()
//         {
//             alert("function call")
//         }
// function apple(){
//   alert(" you have clicked on apple")
// }

// function banana(){
//   alert(" you have clicked on banana")
// }

//   return (
//       <>
//      <h2>welcome in new project</h2>
//      <button onClick={apple}>apple</button>
//      <button onClick={banana}>banana</button>
//      <button onClick={callfunction}>ok</button>
//      </>
//   )
// }



  return (
      <>
     {/* <h2>example of arrow function</h2>
     <button onClick={callfunction}>click to call</button>
     <button onClick={()=>fruit("first parameter")}>arrow function</button>
     <button onClick={()=>fruit("click on apple")}>apple</button>
     <button onClick={()=>fruit("click on banana")}>banana</button> */}
     <h1>state in react</h1>
     <h1>{data}</h1>
     <button  onClick={updata}>click to change value</button>

    </>
  )
}
export default App
