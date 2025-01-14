import { useState } from 'react'
import React from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Props Immutability Demo</h1>
      <Counter count={count} setCount={setCount}/>
    </div>
  )
}

export default App
