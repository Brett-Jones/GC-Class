

//What is a function? A set of statements that performs
//a task or calculates a value
//You want to declare the function before calling it


// function sayHello() {
//     console.log ("This is a message!");
// };

//Function cant run if you don't call it
//() after function is calling that function
// sayHello()

//This is how you call a function


//Inside the "()" are parameters
// function greet(name, greeting) {
//     console.log(greeting + " " + name);
// }


//Inside function call "()" arguments
//Arguments in the function call go in the same order 
//they are listed in the function
// greet("Kevin ", "Hello");
// greet("Elvis ", "Hello again")


//return stores the number, but its not being printed/shown in console
// function squareNumber(number){
//     return number * number;
// }
// let result = squareNumber(4);
// console.log(result);

//return lets you save the value from a function


// function add(a, b){
//     return a + b;
// }

// function multiplyAdd(x, y, z) {
//     let sum = add(x, y);
//     return sum * z;
// }

// let results = multiplyAdd(4, 5, 6);
// console.log(multiplyAdd);


//ARROW FUNCTIONS!!!

//Reg Function

// function sayHello() {
//     console.log("Hello World!");
// }

// sayHello();

// VS

//Arrow Function

// const sayHello2 = () => {
//     console.log("Hello World!")
// };

// sayHello2();

//Arrow functions are used for a short function not something big

const doubleNum = (num) => {
    return num * 2;
}

let total = doubleNum(5);
console.log(total);

// function expression, this makes addFiveFunction
//  not visable outside this function

const addFive = function addFiveFunction(number) {
    return number + 5;
}

console.log(addFive(10))

// function doesnt have a name, this allows us name this function later
let operation = function(number){
    return number
}

operation = function(number) {
    return number * 2
}

/* why are function expressions useful?
this allows us to use the same function
 in different ways
example code
user{
fName: "Kevin"
member: true
}
user.member

*/

let calculatDiscount;

if(user.ismember){
    calculatDiscount = function(price) {
        return price * 0.9;
    } 
} else{
    calculatDiscount = function(price) {
        return price;
    }
}













