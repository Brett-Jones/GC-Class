
//lexical = how the code is written in the code

// let globalVar = "I'm global"; //global lexical environment

// const outerFunction = () => {
//     let outerVar = "I'm outer!!"; //function's lexical environment

//     function innerFunction(){
//         let innerVar = "I'm inner and I'm a winner!!!!" //innerFunctions lexical environment
//         console.log(globalVar);
//     }

// }

//you can return an entire a whole function
//return a reference to that function,
//this means you can save that function 
//and use it somewhere else at another time

const outerFunction = () => {
    let outerVar = "I'm from the outer function"; //function's lexical environment

    return function innerFunction() {
        console.log(outerVar);
    }

}

//a closure is retained when a function has access



//Making a Class
//Classes use keyvalue pairs
//When trying to access the properties of a Class we use "this."

class Car{
    constructor(makeParam, modelParam, yearParam) {
        this.make = makeParam;
        this.model = modelParam;
        this.year = yearParam;
    }
}

//The Class Car is the template we can use to create something new

const myCar = new Car("Toyota", "Corolla", 2000)
const myCar2 = new Car("Ford", "F150", 2024)
const myCar3 = new Car("Chevy", "Blazer", 2020)














