
import React, {useState} from "react";

const SimpleForm = () => {

    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); //Prevents page reload
        setSubmittedValue()
    }

    return (
        <div>
            <h1> Simple React Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Your name:</label>\
                <input
                    type="text"
                    id="name"
                    value={inputValue}
                    onChange={ (e) => setInputValue(e.target.value)}
                    placeholder="Enter your name">
                </input>
                <button type="submit">Submit</button>
            </form>

            {submittedValue && (
                <div>You Submitted: {submittedValue} </div>
            )}
        </div>
    )

}





export default SimpleForm;