/*
JavaScript Variable Naming Rules:
1. Variable names can contain letters, numbers, underscores (_), and dollar signs ($)
2. Variable names must begin with a letter, underscore, or dollar sign
3. Variable names are case-sensitive (myVar and myvar are different)
4. Variable names cannot be JavaScript reserved keywords (like let, const, var, function, etc.)
5. Use camelCase for variable names (first word lowercase, subsequent words capitalized)
6. Variable names should be descriptive and meaningful
7. Avoid using single letters unless in loops or temporary variables
*/

let firstName = "Ahmed";
let lastName = "Al-Bahrawy";
let age = 20;
let city = "New York";

let fullName = firstName + " " + lastName;
let fullName2 = `${firstName} ${lastName}`;

let greeting = "Hello, my name is " + fullName + " and I am " + age + " years old.";
let greeting2 = `Hello, my name is ${fullName} and I am ${age} years old.`;


let x = 'I follow my own dreams';
let y = x // this is a copy of x   y = 'I follow my own dreams'
let z = y // this is a copy of y   z = 'I follow my own dreams'

console.log(x);
console.log(y);
console.log(z);














