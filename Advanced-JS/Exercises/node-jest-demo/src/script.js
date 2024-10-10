
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) {
        throw new Error("Cannot divide by zero");
    }
    
    return a / b;
}

// function login(username, password) {

// }



module.exports = {add, multiply, divide};







