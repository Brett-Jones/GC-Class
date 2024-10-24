
const user = require('./data/user');
const user = require('./data/courses');

const {name, age, email } = user;

console.log(`User info: ${name}, Age ${age}, Email: ${email}`);

const {address: {street, city, zip}} = user;

console.log(`Address: ${street}, ${city}, Zip: ${zip} `)

const { name: userName, age:  userAge} = user;
console.log(userName);
console.log(userAge);














