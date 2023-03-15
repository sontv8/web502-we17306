import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  return (
    <div className="App">
      {count}
      <button onClick={increment}>Click</button>
    </div>
  )
}

export default App
