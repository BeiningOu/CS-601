let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");

let form = document.getElementById("form");
let error = document.getElementById("error");
let facilitator = document.getElementById("facilitator-name");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (
    firstName.value.length < 2 ||
    lastName.value.length < 2 ||
    facilitator.value.length < 2
  ) {
    messages.push("A minimum length of two characters required in names");
  }

  let pattern = /^[A-Za-z]+$/;
  if (
    !firstName.value.match(pattern) ||
    !lastName.value.match(pattern) ||
    !facilitator.value.match(pattern)
  ) {
    messages.push("Only alpha characters are allowed in names");
    console.log("Only alpha characters are allowed in names");
  }

  if (
    !(
      facilitator.value.toLowerCase() === "christian" ||
      facilitator.value.toLowerCase() === "josh" ||
      facilitator.value.toLowerCase() === "fazil"
    )
  ) {
    messages.push("Facilitator's name is invalid");
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join("; ");
  }
});
