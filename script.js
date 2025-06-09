// Arrays

let students = ["Ahmed", "Mohammed", "Omar", "Anas", "Osama"];

students.push("Hamza");
// students[2] = "Ammar";
// let student = students[2];
// students[2] = students[4];
// students[4] = student;

document.getElementById("students").innerHTML = students;

// console.log(students);
// console.log(students.length);
// console.log(students[2]);
// students.pop();
// console.log(students);

console.log(students);
// replace index 2 with Hosam
students.splice(2, 1, "Hosam");
console.log(students);
// remove index 2
students.splice(2, 1);
console.log(students);
// remove index 1, 2
students.splice(1, 2);
console.log(students);
// add Odii in index 2
students.splice(2, 0, "Odii");
