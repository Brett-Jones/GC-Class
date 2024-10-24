
const checkNumber = (value) => {
    if(value > 10){
        return value;
    } else {
        return null
    }
}

//how to get a letter at a certain position

const getLetter = (word, position) => {

    if(position < 1 || word.length){
        console.log("Invalid Position");
    } else {
        console.log(word[position - 1]);
    }
}

const validateName = (name) =>{
    if (name[0] !== name[0].toUpperCase()){
        const correctedName = name[0].toUpperCase() + name.slice(1);
        console.log(correctedName);
    }
}

const buildRange = (start, end) =>{
    if(end < start){
        return [];
    }
    const numbers = [];
    for (let i = start; i <= end; i++);
    numbers.push(i);
    return numbers;
}

console.log(1,10);















module.exports = {checkNumber, getLetter, buildRange};
