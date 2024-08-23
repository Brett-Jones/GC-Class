
for (i = 1; i <= 10; i++){
    console.log(i)
}

for (i = 10; i >= 1; i--){
    console.log(i)
}

let count = 1;

while (count < 10) {
    console.log(count);
    count += 1;
}
console.log(count);

while (count > 1) {
    console.log(count);
    count -= 1;
}
console.log(count);

 let counter = 1;

do {
    console.log(counter);
    counter += 1;
}
while (counter <= 10);

 let counts = 10;

do {
    console.log(counts);
    counts -= 1;
}
while (counts >= 1);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let number of numbers) {
    console.log(number)
}


// Extended Challenge:

let greeting = prompt("Provide a word");


for (let i = greeting.length; i < 10; i++) {
    greeting+= " ";
}

console.log(greeting)





