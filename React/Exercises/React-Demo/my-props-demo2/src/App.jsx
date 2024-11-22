import React from 'react'
import './App.css'

const App = () => {
  const person = {
    name: "Leeroy",
    age: 29,
    class: Paladin
  };

  return(
    <div>
      <Greeting person={person}/>
    </div>
  )

}

export default App
