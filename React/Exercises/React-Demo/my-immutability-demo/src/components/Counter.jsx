import React from "react";

const Counter = ({count, setCount}) => {

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}


export default Counter;