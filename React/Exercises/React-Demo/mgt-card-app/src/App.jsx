import React from 'react';
import './App.css';
import Card from './Card';

function App() {

  return (
    <div>
      <h1>Magic: The Gathering Cards</h1>

      <Card
      title= "Black Lotus"
      type="Artifact"
      description="Add three mana of any color."
      />

      <Card
      title= "Demonic Tutor"
      type="Counter spell"
      description="Kevin yells at you about memory for several hours"
      />

      <Card
      title= "The One Ring"
      type="Legendary Artifact"
      description="My presiousssssssss"
      />


    </div>
  )



  // return (
  //   <div className='App'>
  //     <Card />
  //   </div>
  // );
}

export default App;
