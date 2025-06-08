let age = 60;

if (age >= 18) {
  if (age >= 60) {
    console.log(`This person is old, His age is ${age}`);
  } else if (age >= 40) {
    console.log(`This person is near to be old, His age is ${age}`);
  } else {
    console.log(`This person is no longer a minor, His age is ${age}`);
  }
} else {
  console.log(`This person is a minor, His age is ${age}`);
}
