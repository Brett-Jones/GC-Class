
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// for (let i = 0; i < fruits.length; i ++){
//     console.log(fruits[i])
// }

//forEach goes through each item in an array

// fruits.forEach(
//     function(fruit){
//         console.log(fruit);
//     }
// )

//array.forEach(function(element, index, array))

// fruits.forEach(
//     function(fruit){
//         console.log(index + ": " + fruit);
//     }
// )

let fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange', 'Grape', 'Elderberry', 'Kiwi'];


// let removedFruits = fruits.splice(-2, 2);

// fruits.forEach(
//     function(fruit){
//         console.log(fruit);
//     }
// )


let colors = ["Red", "Blue", "Green"];

colors.splice(1, 0, "Yellow", "Purple");

console.log(colors)


colors.splice(1, 1, "Cyan");

console.log(colors);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(
    function(number) {
        return number % 2 === 0;
    }
);

let oddNumbers = numbers.filter(
    function(number) {
        return !(number % 2 === 0);
    }
);

console.log(evenNumbers);
console.log(oddNumbers);











