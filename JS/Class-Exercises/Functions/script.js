
//What is a function? A set of statements that performs
//a task or calculates a value
//You want to declare the function before calling it


function sayHello() {
    console.log ("This is a message!");
};

//Function cant run if you don't call it
//() after function is calling that function
sayHello()

//This is how you call a function


//Inside the "()" are parameters
function greet(name, greeting) {
    console.log(greeting + " " + name);
}


//Inside function call "()" arguments
//Arguments in the function call go in the same order 
//they are listed in the function
greet("Kevin ", "Hello");
greet("Elvis ", "Hello again")


//return stores the number, but its not being printed/shown in console
function squareNumber(number){
    return number * number;
}
let result = squareNumber(4);
console.log(result);

//return lets you save the value from a function


function add(a, b){
    return a + b;
}

function multiplyAdd(x, y, z) {
    let sum = add(x, y);
    
}









