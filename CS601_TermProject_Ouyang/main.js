function get(id) {
  return document.getElementById(id);
}

let menuLabel = get("menu-label");
let navBar = get("nav-bar");

navBar.style.display = "none";

menuLabel.onclick = function () {
  if (navBar.style.display == "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }
};

//   submitName.onclick = function () {
//     calculator.style.visibility = "visible";
//     welcome.innerText =
//       username.value + ": welcome to Beining's simple JavaScript calculator";
//     let nameBox = get("name-box");
//     nameBox.style.display = "none";
//   };

//   submitNum.onclick = function () {
//     let username = get("name");
//     let numberOne = get("first-number");
//     let numberTwo = get("second-number");
//     let sum = get("sum-number");
//     let twoSum = Number(numberOne.value) + Number(numberTwo.value);
//     sum.innerText =
//       "The sum of " +
//       numberOne.value +
//       " and " +
//       numberTwo.value +
//       " is " +
//       twoSum;
//     console.log(twoSum);
//     if (twoSum > 10) {
//       let bigNum = get("big-small");
//       bigNum.innerText = "This is a big number.";
//       console.log("big number");
//     }
//     if (twoSum <= 10) {
//       let smallNum = get("big-small");
//       smallNum.innerText = " This is a small number.";
//       console.log("small number");
//     }

//     calculator.style.display = "none";
//     tryAgain.style.visibility = "visible";
//     stopGame.style.visibility = "visible";
//   };

//   tryAgain.onclick = function () {
//     calculator.style.display = "flex";
//     tryAgain.style.visibility = "hidden";
//     stopGame.style.visibility = "hidden";
//   };

//   stopGame.onclick = function () {
//     let mainBox = get("main-box");
//     mainBox.style.display = "none";
//     bye.style.display = "block";
//   };
