
const fullName = "Mitch Cuckovich";
let age = 25;
const birthday = "January 24th";
const pineApplePizza = false;
let lifeEvents = [
    "I was born in Troy, Michigan.",
    "I went to Hope College.",
    "I participated in the junior olympics when I was 10 years old.",
    "I love to be in nature"
];

if(pineApplePizza === true){
    console.log(`My name is ${fullName} and I like pineapples on pizza. 
    I am currently ${age} years old & my birthday is ${birthday}.`)
} else{ console.log(`My name is ${fullName} and I'm not into pineapples on pizza. 
        I am currently ${age} years old & my birthday is ${birthday}.`)
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i])
}

let counter = 0;
//          (How to make a random number)(Max num)(Min num)
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)

while (counter < 10){
    if(randomNumber != 5){
        counter++;
        console.log("!== 5");
    }else{
        counter++;
        console.log(`5===5. It took ${counter} iterations to randomly generate number 5.`);
    }
    break;
}

let a = 0, j = 0;
while (a < 30) {
    a++;
    j += a;
}


