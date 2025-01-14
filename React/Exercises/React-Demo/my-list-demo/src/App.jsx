import ListComponents from './components/ListComponents'
import React from 'react'
import './App.css'

function App() {
    const myList = ['Apple', 'Banana', 'Cherry', 'Date'];

    return (
      <div>
        <h1>My Favorite Fruits</h1>
        <ListComponents list={myList}/>
      </div>
    );
};

export default App;
