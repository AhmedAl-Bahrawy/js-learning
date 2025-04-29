//This is a challenge from tarmeez academy

let num1 = 10;
let num2 = 4;

let sum = num1 + num2;
let diff = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;



const result = document.querySelector("h3");
let text = "First number: "
    + num1
    + " <br> " +
    "Second number: " +
    num2 +
    "<br>" +
    "Sum: " +
    sum +
    "<br>" +
    "Difference: " +
    diff +
    "<br>" +
    "Product: " +
    product +
    "<br>" +
    "Quotient: " +
    quotient +
    "<br>" +
    "Remainder: " + 
    remainder;
console.log(text);
result.innerHTML = text;

//done
