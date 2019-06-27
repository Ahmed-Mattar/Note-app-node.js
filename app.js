const validator = require('validator')
const getNotes = require('./notes.js')

// console.log(add(2,3));

console.log(getNotes());

console.log(validator.isEmail('@example.com'))