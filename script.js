console.log("Hello World");

const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
    h1.innerHTML = "Hey do not click me";
});

