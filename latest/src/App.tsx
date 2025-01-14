import { useState } from 'react'
import './App.css'
import Greeting from './components/Greetings'

function App() {
  
  return (
    <div>
      <h1>Hello</h1>
      <p>Send baked goods</p>

      <Greeting name="Leeroy" age={25}/>

    </div>
  )
    
        
}

export default App
