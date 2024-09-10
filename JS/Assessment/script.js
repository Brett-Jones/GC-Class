
const printTens = () => {
    for (let i = 10; i <= 100; i += 10){
        console.log(i);
    }
}

printTens()




/*
    Functionality: uses a while loop to log, one by one, 
    the numbers starting at step and adding step each time. 
    It stops when the number is divisible by ten 
*/

//  CODE BELOW ISN'T DONE, COME BACK LATER!!!

// const countUntilTens = (step) => {
//     while (10 % step) {
//         if (step % 10 === 0){
//         console.log(step);
//         step++;
//         }
//     }
//     console.log(step);
// }

// countUntilTens(3)


const hasVowels = (word) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if(word.length = vowels){
        return true
    } else {
        return false
    }
    
}

let word = hasVowels("b");
console.log(word);







