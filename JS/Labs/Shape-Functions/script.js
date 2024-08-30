
function getAreaOfCircle(radius) {
    const area = Math.PI * radius * radius;
    return area;
}

let area = getAreaOfCircle(5);
console.log(area);

function getCircumferenceOfCircle(radius) {
    const circumference = 2 * Math.PI * radius;
    return circumference;
}

let circumference = getCircumferenceOfCircle(5);
console.log(circumference);

function getAreaOfSquare(side) {
    const area = side * side;
    return area;
}

let sqArea = getAreaOfSquare(5);
console.log(sqArea);

function getAreaOfTriangle(base, height) {
    const area = (base * height) / 2;
    return area;
}

let triArea = getAreaOfTriangle(8, 3);
console.log(triArea);





