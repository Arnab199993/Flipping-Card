import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FlipableCard from './Components/FlipableCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FlipableCard/>
    </div>
  )
}

export default App
