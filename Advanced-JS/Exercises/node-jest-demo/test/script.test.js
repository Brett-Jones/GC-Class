
// const { add, multiply, divide} = require("../src/script")

// test('adds 2 + 3 to equal 5', () => {
//     expect(add(2, 3)).toBe(5);
// })

// test('multiply 2 * 3 equals 6', () => {
//     expect(multiply(2, 3)).toBe(6);
// })

// test('divides 6 / 3 to equal 2', () => {
//     expect(divide(6, 3)).toBe(2);
// })

// test('throws an error when dividing by zero', () => {
//     expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
// })

// test('add 2 + 3 to not equal 6', () => {
//     expect(add(2,3).not.toBe(6));
// })

// test('divide 18 / 3 to equal 6', () => {
//     expect(divide(18, 3)).toBe(6);
// })

// test('test multiplying a string', () => {
//     expect(multiply("test string", 3)).toBe(-18);
// })

// test('test of adding an empty string to a number', () => {
//     expect(multiply("", 3)).toBe(6);
// })


// const {findMax, findMin, elementExists, arrayLength} = require('../src/arrayOperations')

// test('find the min of [3,1,4,2] to be 1', () => {
//     expect(findMin([3,1,4,2])).toBe(1);
// });

// test('find the min of [3,1,4,2] to not be 3', () => {
//     expect(findMin([3,1,4,2])).not.toBe(3);
// });

// test('find the max of [3,1,4,2] to be 4', () => {
//     expect(findMax([3,1,4,2])).toBe(4);
// });

// test('elementExists for 2 in [3,1,4,2] to be true', () => {
//     expect(elementExists([3,1,4,2], 2)).toBe(true);
// });

// test('elementExists for 2 in [3,1,4,2] to not be true', () => {
//     expect(elementExists([3,1,4,2])).not.toBe(true);
// });

// test('the length of the array will be 4', () => {
//     expect(arrayLength([3,1,4,2])).toBe(4);
// })

// test('array commparison [1,2,3] to equal [1,2,3]', () => {
//     expect([1,2,3]).toEqual([1,2,3]);
// })


const {getProperty, updateProperty, deleteProperty} = require('../src/objectOperations')

test('get name of property from {name: "Qui-gon", allegiance: "jedi"}', () => {
    const starWars = {name: "Qui-gon", allegiance: "jedi"}    
    expect(getProperty(starWars, "name").toBe("Qui-gon"));
    })

test('update the allegiance property to sith', () => {
    const starWars = {name: "Anakin", allegiance: "jedi"}    
    (updateProperty(starWars, "allegiance", "sith"));
    expect(starWars.allegiance).toBe("sith");
    })

test('update the allegiance property to sith', () => {
    const starWars = {name: "Anakin", allegiance: "sith"}    
    expect(updateProperty(starWars, "allegiance", "sith")).toEqual({name: "Anakin", allegiance: "jedi"});
    })

