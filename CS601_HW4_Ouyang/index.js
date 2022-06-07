function get(id) {
  return document.getElementById(id);
}

let firstName = get("first-name");
let lastName = get("last-name");

let form = get("form");
let error = get("error");
let facilitator = get("facilitator-name");

let blueShirt = get("blue-shirt");
let yellowShirt = get("yellow-shirt");
let pinkShirt = get("pink-shirt");
let cat = get("cat");
let flower = get("flower");
let seeShirt = get("see-shirt-button");

blueShirt.style.display = "none";
yellowShirt.style.display = "none";
pinkShirt.style.display = "none";
cat.style.display = "none";
flower.style.display = "none";

// validation code:
form.addEventListener("submit", validate);
function validate(event) {
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
    event.preventDefault();
    error.innerText = "Error: " + messages.join("; ");
  }
}

//display shirt
seeShirt.onclick = function () {
  if (get("blue").checked) {
    blueShirt.style.display = "";
  } else {
    blueShirt.style.display = "None";
  }

  if (get("yellow").checked) {
    yellowShirt.style.display = "";
  } else {
    yellowShirt.style.display = "None";
  }

  if (get("pink").checked) {
    pinkShirt.style.display = "";
  } else {
    pinkShirt.style.display = "None";
  }

  if (get("flower-box").checked) {
    flower.style.display = "";
  } else {
    flower.style.display = "none";
  }

  if (get("cat-box").checked) {
    cat.style.display = "";
  } else {
    cat.style.display = "None";
  }
};
