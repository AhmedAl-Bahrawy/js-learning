// Logical Operators

let x = 10;
let y = 7;

console.log(x > 5 && x < 15); // true
console.log(x > 5 || x < 15); // true
console.log(!(x > 5 && x < 15)); // false

console.log("=".repeat(50));

console.log(x > 5 && y < 15); // true
console.log(x > 5 || y < 15); // true
// ! reverse the result
console.log(!(x > 5 && y < 15)); // false
console.log(y < 3 || y > 10 || x == 10); // true

console.log("=".repeat(50));

// ! reverse the result
console.log(x > 5 && y < 15); // true
console.log(x > 5 || y < 15); // true
console.log(!(x > 5 && y < 15)); // false
