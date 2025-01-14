import React,{ useState } from 'react'
import express from 'express'
import axios from 'axios';

import './App.css'

function App() {
  
  const [isChecked, setIsChecked] = useState(false);
  const [places, setPlaces] = useState([]);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAddPlaces = () => {
    const newPlaces = "New Place"; 
    setPlaces([...places, newPlaces]); 
  };

  return (
    <>
    <div>
      <h2>Places App</h2>
      <form>
        <label>Name
          <input type="text" />
        </label>
      </form>
      <label>
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={handleChange} 
          />
          First Time
        </label>
      </div>
      <div className="addPlaceButton">
        <button onClick={handleAddPlaces}>Add</button>
        <ul>
          {places.map((place, index) => (
            <li key={index}>{place}</li>
            
          ))}
        </ul>
        <h2>List of places:</h2>
      </div>
    </>
  )
}

export default App

