let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");

let facilitator = document.getElementById("facilitator-name");

let form = document.getElementById("form");

document.getElementsByName("color").required = true;

// function validate(event){

// }

form.addEventListener("submit", (e) => {
  let messages = [];
  if (firstName.length < 2 || lastName.length < 2) {
    messages.push("A minimum length of two characters required");
  }

  let pattern = /[[a-zA-Z]/;
  if (
    !pattern.test(firstName) ||
    !pattern.test(lastName) ||
    !pattern.test(facilitator)
  ) {
    messages.push("Only alpha characters are allowed in names");
  }

  if (facilitator.value === " Christian" || "Josh" || "Fazil") {
    messages.push("Facilitator's name is invalid");
  }
});

console.log(firstName);
