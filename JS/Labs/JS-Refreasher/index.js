
function checkScope() {
    if(true){
        let blockVariable = " I am in a block";
        console.log(blockVariable);
    }

    console.log(blockVariable);
}

checkScope();

function hoistedFunction() {
    console.log('This function is hoisted!!!!')
}

hoistedFunction();

console.log(varVariable);
var varVariable = 'This is a var Variable';

console.log(letVariable);
let letVariable = 'This is a let variable';

