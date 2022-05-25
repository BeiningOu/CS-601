console.log("Hello World");

function get(id) {
  return document.getElementById(id);
}

let submit = get("submit");
let tryAgain = get("try-again");
let stopGame = get("stop");
tryAgain.style.visibility = "hidden";
stopGame.style.visibility = "hidden";
let gameOn = true;

submit.onclick = function () {
  let username = get("name");
  let numberOne = get("first-number");
  let numberTwo = get("second-number");
  let sum = get("sum-number");
  let twoSum = Number(numberOne.value) + Number(numberTwo.value);
  sum.innerText = twoSum;
  console.log(twoSum);
  if (twoSum > 10) {
    let bigNum = get("big-small");
    bigNum.innerText = "big number";
    console.log("big number");
  }
  if (twoSum <= 10) {
    let smallNum = get("big-small");
    smallNum.innerText = " small number";
    console.log("small number");
  }
  let calculator = get("calculator");
  calculator.style.visibility = "hidden";
  tryAgain.style.visibility = "visible";
  stopGame.style.visibility = "visible";
};
tryAgain.onclick = function () {
  calculator.style.visibility = "visible";
  tryAgain.style.visibility = "hidden";
  stopGame.style.visibility = "hidden";
  let gameOn = true;
};

stopGame.onclick = function () {
  let mainBox = get("main-box");
  mainBox.style.display = "none";
  let gameOn = false;
};
