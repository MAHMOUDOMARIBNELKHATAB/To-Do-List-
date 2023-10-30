let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let ul = document.querySelector("#list");
let li = document.createElement("li");

function addtask() {
  if (input.value === "") {
    alert("You Must Write A tsak! ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
}

ul.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
