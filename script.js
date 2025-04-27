// one of the most important things in JavaScript is the ordering of compilation in numbers
// This is known as "Operator Precedence" - the order in which operations are performed

// Example of JavaScript number operations and order of operations (PEMDAS)
let example1 = 10 + 5 * 2;     // Multiplication happens first: 5 * 2 = 10, then 10 + 10 = 20
console.log("Example 1:", example1);

let example2 = (10 + 5) * 2;   // Parentheses take precedence: 10 + 5 = 15, then 15 * 2 = 30
console.log("Example 2:", example2);

// Order of operations in JavaScript follows PEMDAS:
// P - Parentheses () - Highest priority
// E - Exponents **
// M - Multiplication *
// D - Division /
// A - Addition +
// S - Subtraction - - Lowest priority

let complexExample = 2 ** 3 + 10 * 5 / 2 - 3;
// Breaks down as:
// 1. 2 ** 3 = 8         (Exponent first)
// 2. 10 * 5 = 50        (Multiplication)
// 3. 50 / 2 = 25        (Division)
// 4. 8 + 25 = 33        (Addition)
// 5. 33 - 3 = 30        (Subtraction)
console.log("Complex example:", complexExample);

// Be careful with floating point arithmetic
// JavaScript uses binary floating-point numbers which can lead to precision issues
let floatingPoint = 0.1 + 0.2;  // Expected: 0.3, Actual: 0.30000000000000004
console.log("Floating point example:", floatingPoint);

// Assignment operators - different ways to modify a variable's value
let x = 10;        // Basic assignment
console.log(x);
x = x + 5;         // Traditional addition
console.log(x);
x += 5;            // Shorthand addition (same as x = x + 5)
console.log(x);
x -= 5;            // Shorthand subtraction (same as x = x - 5)
console.log(x);
x *= 5;            // Shorthand multiplication (same as x = x * 5)
console.log(x);
x /= 5;            // Shorthand division (same as x = x / 5)
console.log(x);
x %= 5;            // Shorthand modulo (same as x = x % 5) - gives remainder after division
console.log(x);

let y = 10;
y++; // this is the same as y = y + 1
console.log(y);

let z = 10;
z--; // this is the same as z = z - 1
console.log(z);










