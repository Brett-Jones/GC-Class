
// In order to store a Object you use '{}'
// You also close an Object with ";"
//Objects can different types of data together
// You can also mix different types of data in an Object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "Blue",
    // you can also add functions in Objects
    start: function() {
        console.log("Rev up the engine!!!");
    }
};

// If you want to access data in the Object
// car is the Object & make is the data inside that Object.
// You cana change the value of the data in an Object

car.color = "Red";

console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.color);
car.start();

const students = [
    {
        name:"Alice",
        age: 20,
        major: "Computer Science"
    },
    {
        name:"Micah",
        age: 25,
        major: "Math"
    },
    {
        name:"Bob",
        age: 21,
        major: "Physics"
    }

]

// In order to access an Object in an array
// if you are using a object long-term assign it (let/const)
// if its one time then just calling the Object itself

for (let i = 0; i < students.length; i++){
    const student = student[i];
    console.log(student.age);
}

// "this." means the current piece of code/current scope
// gives direction to know where to reference in scope

// function in side an object you put "this." in front of it

// A callback function is that a function that 
// calls back a function that does something

const numbers = [1, 2, 3, 4, 5];

// function display(number){
//     console.log(number);
// }

numbers.forEach(function(number){
    console.log(number);
    }
);











