// Challenge 1:

// Create a string variable
let title = "Hello World";

// Convert the string to uppercase
title = title.toUpperCase();
console.log(title);

// Replace the first occurrence of 'o' with 'y'
title = title.replace("o", "y");
console.log(title);

// Reverse the string by:
// 1. split('') - converts string to array of characters
// 2. reverse() - reverses the array
// 3. join('') - converts array back to string
title = title.split('').reverse().join('')
console.log(title);
