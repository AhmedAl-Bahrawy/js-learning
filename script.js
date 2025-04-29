// Data types

// Primitive data types
// Number int or float
// String contains "" or ''
// Boolean true or false
// Null no value
// Undefined no value
// Symbol unique and immutable
// BigInt large integers

// Non-primitive data types
// Object
// Array

// Variables
// let new way
// const new way
// var old way

// var is global scope old way
var x = 'hello';

// let and const are block scope new way
let y = 'world';
// I cannot change the value of z
const z = 'hi';

console.log(x);
console.log(y);
console.log(z);

// I can change the value of x
x = 'hi';
// I can change the value of y
y = 'hello';
// that is not allowed
// z = 'world'; is not allowed

// no issue     
console.log(x);
// no issue
console.log(y);
// error
console.log(z);

// typeof operator to check the type of the variable
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);







