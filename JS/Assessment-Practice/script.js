
// const printTens = () => {
//     for (let i = 10; i <= 100; i += 10){
//         console.log(i);
//     }
// }

// printTens()


/*
    Functionality: uses a while loop to log, one by one, 
    the numbers starting at step and adding step each time. 
    It stops when the number is divisible by ten 
*/

//  CODE BELOW ISN'T DONE, COME BACK LATER!!!

// const countUntilTens = (step) => {
//     let count = step;
//     while (count % 10 !== 0) {
//         console.log(count);
//         count+=step;
//     }
//     console.log(count);
// }

// countUntilTens(3)


// const hasVowels = (word) => {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     for(letter of word){
//         if(vowels.includes(letter)){
//             return true;
//         } 
//     } 
//     return false;
// }

// let word = hasVowels("b");
// console.log(word);


// const testTemperature = (desiredTemp, actualTemp) => {
//     if(desiredTemp < actualTemp) {
//         console.log("Run Heat");
//     } else if( desiredTemp === actualTemp) {
//         console.log("Stand By");
//     } else  if (desiredTemp > actualTemp) 
//         console.log("Run A/C");
// }

// testTemperature(70, 85);


// const makeCar = (make, model, year, hybrid) => ({
//     make,
//     model,
//     year,
//     hybrid
// })

// const cars = [
//     {
//     make: 'Toyota',
//     model: 'Prius',
//     year: 2020,
//     hybrid: true
//     },
//     {
//     make: 'Toyota',
//     model: 'Prius',
//     year: 2021,
//     hybrid: true
//     },
//     {
//     make: 'Ford',
//     model: 'F-150',
//     year: 2015,
//     hybrid: false
//     },
//     {
//     make: 'Ferrari',
//     model: 'Enzo',
//     year: 2004,
//     hybrid: false
//     }

// ]

// const findCars = (cars, model) => {
//     const matchingCars = [];
//     for (car of cars) {
//         if (model === cars.model) matchingCars.push(car)
//     }
//     return matchingCars
// }


const findCars = (cars, model) => {
	const matchingCars = []
	cars.forEach(car => {
		if (model === car.model) matchingCars.push(car)
	})
	return matchingCars
}

findCars();








