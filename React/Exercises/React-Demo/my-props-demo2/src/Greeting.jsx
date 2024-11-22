
import React from "react";

function Greeting (props) {
    const {name, age, wowClass} = props.person;

    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>Age: {age}</p>
            <p>Class: {wowClass}</p>
        </div>
    );
}




