import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [text, setText] = useState('')
  const [isDark, setIsDark] = useState(false)

  function toggleTheme() {
    setIsDark(!isDark)
  }

  function handleChange(e) {
    setText(e.target.value)
  }

  function toggleText() {
    setIsVisible(!isVisible)
  }
  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }
  const containerStyle = {
    background: isDark ? '#1a1a1a' : '#ffffff',
    color:      isDark ? '#f0f0f0' : '#1a1a1a',
    minHeight:  '100vh',
    display:    'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s, color 0.3s',
  }

   

  return (
    <>
    <h1>Counter</h1>
      <h2>{count}</h2>

      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
       <button onClick={toggleText}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>Hello! I was hidden, now I'm visible.</p>}
      <h1>Live Input</h1>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />

      <p>{text}</p>
      <div style={containerStyle}>
      <h1>{isDark ? ' Dark Mode' : ' Light Mode'}</h1>
      <p>This text changes color based on the theme.</p>

      <button onClick={toggleTheme}>
        {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
      
    </>
  )
}

export default App
