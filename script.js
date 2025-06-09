// Switch & Case

// let age = 60;

// switch (health) {
//   case "strong":
//     console.log("Still strong forever");
//     break;
//   case "weak":
//     console.log("Watch out your health");
//     break;
//   default:
//     console.log("good");
// }

// switch (true) {
// case age >= 60:
//     console.log("You are old");
//     break;
//   case age >= 40:
//     console.log("You are near to be old");
//     break;
//   default:
//     console.log("You are Young");
// }

// Get the form element
const form = document.getElementById("measurementForm");

// Add event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get the input values
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmi_label = document.getElementById("bmi");

  // Validate inputs
  if (height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values greater than 0");
    return;
  }

  // Calculate BMI (Body Mass Index)
  const heightInMeters = height / 100;
  const bmi = weight / heightInMeters ** 2;

  // Display the result
  let message = `Your BMI is: ${bmi.toFixed(2)}\n`;

  // Add BMI category
  if (bmi < 18.5) {
    message += "Category: Underweight";
  } else if (bmi < 25) {
    message += "Category: Normal weight";
  } else if (bmi < 30) {
    message += "Category: Overweight";
  } else {
    message += "Category: Obese";
  }
  bmi_label.innerHTML = message;
});
