import React, { useState } from 'react'
import './App.css'

function App() {
//  always use React & its STATE to display information to ensure it stays in sync
  const [text, setText] = useState('');

  const handleInputChange = (e) =>{
    setText(e.target.value)
  }


  return (
    <div className=''>
      <h1>React + Vite</h1>
      <input 
      type="text"
      placeholder='Type something...'
      value={text}
      onChange={handleInputChange}
      
      />
      <p>You typed: {text}</p>
    </div>
  )

}

export default App
