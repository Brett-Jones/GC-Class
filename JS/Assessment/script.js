
const countDown = () => {
    for(let i = 5; i >= 1; i--)
        console.log(i);
}

countDown();

const countUp = (start, end) => {
    for(let i = start; i <= end; i++)
        console.log(i);
}

countUp(8, 17);


const isLong = (word) => {
    if(word.length >= 10){
        return true
    } else {
        return false
    }
}

let result = isLong("SuperLongName");
console.log(result);


const whatWaterState = (temperature) => {
    if(temperature <= 32) {
        console.log("Solid");
    } else if(temperature > 32 && temperature < 212) {
        console.log("Liquid");
    } else  if (temperature > 212) 
        console.log("Gas");
}

whatWaterState(700);


const sandwiches = [
    {
    type: 'Italian',
    calories: 1000,
    cost: 7.69,
    isVegetarian: false
    },
    {
    type: 'Veggie',
    calories: 500,
    cost: 5.50,
    isVegetarian: true
    },
    {
    type: 'Meatball',
    calories: 900,
    cost: 8.25,
    isVegetarian: false
    },
    {
    type: 'Jackfruit',
    calories: 650,
    cost: 8.50,
    isVegetarian: true
    }
];

const makeSandwich = (sandwichArray, type, calories, cost, isVegetarian) => {
    const addSandwich = {
        type: type,
        calories: calories,
        cost: cost,
        isVegetarian: isVegetarian
    };
    sandwichArray.push(addSandwich);
}

makeSandwich(sandwiches, 'Taco', 725, 7.89, false);
console.log(sandwiches);



const findVegetarianSandwich = (sandwichArray) => {
	return sandwichArray.find(record => record.isVegetarian);
};

const veggie = findVegetarianSandwich(sandwiches);
console.log(veggie);


//CODE BELOW DOES NOT WORK!!!

const findCheapestSandwich = sandwichArray => {
    let cheapestSandwich = 0;
    for (let i = 0; i < sandwichArray; i++) {
        if(sandwichArray[i].cost < cheapestSandwich.cost) {
            cheapestSandwich = sandwichArray[i];
        }
    }
    return cheapestSandwich;
};

sandwiches.forEach(findCheapestSandwich);
const beingCheap = findCheapestSandwich();
console.log(beingCheap);




