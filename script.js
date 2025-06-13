// For Loops
// for (let i = 0; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

const taple = document.getElementById("taple");

for (let i = 0; i <= 30; i++) {
  taple.innerHTML += `10 × ${i} = ${10 * i} <br>`;
}
