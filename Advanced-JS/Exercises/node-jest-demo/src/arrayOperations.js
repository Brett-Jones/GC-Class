
function findMin(arr) {
    return Math.min(...arr);
}

//"..." = spread operator & it spreads the arr into separate elements


function findMax(arr) {
    return Math.max(...arr);
}

function elementExists(arr, element){
    return arr.includes(element);
}

function arrayLength(arr) {
    return arr.length;
}


//includes is a way to find something inside an array

module.exports = {findMax, findMin, elementExists, arrayLength};
