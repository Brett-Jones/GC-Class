import React, { useState } from 'react';

const Counter = () => {

    // Count is the state. Set count will set the state
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState + 1);
    }
    const decrement = () => {
        setCount((prevState) => prevState - 1);
    }

    return (
        <div>
            <h2>Counter with prevState</h2>
            <p>Current Count: <strong>{count}</strong></p>

            <div className='buttons'>
                <button onClick={increment}></button>
                <button onClick={decrement}></button>
            </div>
        </div>
    );
}

export default Counter


