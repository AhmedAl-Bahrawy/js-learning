//Numbers in JavaScript

let x = 20;
let y = 10;

let z = x * y + 30; // 230 follow the math rules

z = 30 + x * y; // 230 follow the math rules (BODMAS)

z = (30 + x) * y; // 600 follow the math rules (BODMAS)

z = 30 + x * y; // 630 follow the math rules (BODMAS)

// isNaN()

console.log(isNaN(x)); // true
console.log(isNaN(y)); // true
console.log(isNaN(z)); // true

// Math Object

console.log(Math.PI); // 3.141592653589793

console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

console.log(Math.min(x, y, z)); // 10
console.log(Math.max(x, y, z)); // 230

x = "10";
y = "20";

// z = x * y // NaN (Not a Number)

z = x + y; // 1020 (concatenation)

// isNaN()

console.log(isNaN(x)); // false
console.log(isNaN(y)); // false
console.log(isNaN(z)); // false
