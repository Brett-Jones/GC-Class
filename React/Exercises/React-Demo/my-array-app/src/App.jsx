import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState(['Corn', 'Tomatoes', 'Potatoes'])

  return (
    <div>
      <h1>Props Immutability with an Array</h1>
      <ItemsList items={items} setItems={setItems}/>
    </div>
  )
}

export default App
