// Challenge 6
let names = [];

const add_btn = document
  .getElementById("add")
  .addEventListener("click", function () {
    const name = document.getElementById("name");
    const names_list_HTML = document.getElementById("names-list");
    if (name.value != "") {
      names.push(name.value);
      names_list_HTML.innerHTML = names;
      name.value = "";
    } else {
      alert("please enter a name ");
    }
  });

const delete_btn = document
  .getElementById("delete")
  .addEventListener("click", function () {
    const names_list_HTML = document.getElementById("names-list");
    names.pop();
    names_list_HTML.innerHTML = names;
  });
