// Challenge 2:

const text = document.getElementById('text');
const r1 = document.getElementById('r-1');
const r2 = document.getElementById('r-2');
const r3 = document.getElementById('r-3');

r1.innerHTML = text.innerHTML.toUpperCase();
r2.innerHTML = text.innerHTML.replace("o", "y");
r3.innerHTML = text.innerHTML.split('').reverse().join('');







