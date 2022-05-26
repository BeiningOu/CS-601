console.log("Hello World");

function get(id) {
  return document.getElementById(id);
}

let submit = get("submit");
let tryAgain = get("try-again");
let stopGame = get("stop");
tryAgain.style.visibility = "hidden";
stopGame.style.visibility = "hidden";


let bye = get("bye");
bye.style.display = "none";


let gameOn = true;

let welcome = get("welcome");
let username = get("name");
let submitName = get("submit-name");
let calculator = get("calculator");
calculator.style.visibility = "hidden";

submitName.onclick = function () {
  calculator.style.visibility = "visible";
  welcome.innerText =
    username.value + ": Welcome to Beining's Simple JavaScript Calculator";
  let nameBox = get("name-box");
  nameBox.style.display = "none";
};

submit.onclick = function () {
  let username = get("name");
  let numberOne = get("first-number");
  let numberTwo = get("second-number");
  let sum = get("sum-number");
  let twoSum = Number(numberOne.value) + Number(numberTwo.value);
  sum.innerText =
    "The sum of " +
    numberOne.value +
    " and " +
    numberTwo.value +
    " is " +
    twoSum;
  console.log(twoSum);
  if (twoSum > 10) {
    let bigNum = get("big-small");
    bigNum.innerText = "This is a big number.";
    console.log("big number");
  }
  if (twoSum <= 10) {
    let smallNum = get("big-small");
    smallNum.innerText = " This is a small number.";
    console.log("small number");
  }

  calculator.style.display = "none";
  tryAgain.style.visibility = "visible";
  stopGame.style.visibility = "visible";
};
tryAgain.onclick = function () {
  calculator.style.display = "flex";
  tryAgain.style.visibility = "hidden";
  stopGame.style.visibility = "hidden";
  let gameOn = true;
};

stopGame.onclick = function () {
  let mainBox = get("main-box");
  mainBox.style.display = "none";
  bye.style.display = "block";
  let gameOn = false;
};
