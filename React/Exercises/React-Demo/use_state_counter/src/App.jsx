
import React from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

export default App
