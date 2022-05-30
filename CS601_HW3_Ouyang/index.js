function get(id) {
  return document.getElementById(id);
}

let welcome = get("welcome");
let username = get("name");
let submitName = get("submit-name");
let calculator = get("calculator");
let submitNum = get("submit");
let tryAgain = get("try-again");
let stopGame = get("stop");
let bye = get("bye");
let alertWindowMode = true;

tryAgain.style.visibility = "hidden";
stopGame.style.visibility = "hidden";
bye.style.display = "none";
calculator.style.visibility = "hidden";

//window prompt for name and greeting
let person = prompt("Please enter your name", "");
if (person != null) {
  window.alert(
    "Hello!" +
      person +
      ": welcome to Beining's simple JavaScript calculator, let's do a sum of two numbers!"
  );
  let alertWindow = window.confirm(
    "Do you want to do the calculation in alert windows? 'Ok' to continue with alert windows; Click 'cancel' to enter the interface."
  );
  if (alertWindow) {
    alertWindowMode = true;
  } else {
    alertWindowMode = false;
  }
}

// using window prompts if alertWindowMode is chose
while (alertWindowMode) {
  let firstNumber = prompt("Please type your first number");
  let secondNumber = prompt("Please type your second number");
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  let sumOfTwo = firstNumber + secondNumber;

  // check whether it is a number.//
  if (isNaN(sumOfTwo)) {
    window.alert("Invalid input, please try again");
  } else {
    window.alert(
      "The sum of " +
        firstNumber +
        " and " +
        secondNumber +
        " is " +
        sumOfTwo +
        "."
    );
  }

  if (sumOfTwo > 10) {
    let bigNumber = get("big-small");
    alert(sumOfTwo + " is a big number.");
  }
  if (sumOfTwo <= 10) {
    alert(sumOfTwo + " is a small number.");
  }

  let again = window.confirm(
    "Do one more time with window prompts? Press 'cancel' to try the interface mode."
  );

  if (again == true) {
    alertWindowMode = true;
  } else {
    alertWindowMode = false;
  }
}

// all following code are using buttons: (no window prompts)

submitName.onclick = function () {
  calculator.style.visibility = "visible";
  welcome.innerText =
    username.value + ": welcome to Beining's simple JavaScript calculator";
  let nameBox = get("name-box");
  nameBox.style.display = "none";
};

submitNum.onclick = function () {
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
};

stopGame.onclick = function () {
  let mainBox = get("main-box");
  mainBox.style.display = "none";
  bye.style.display = "block";
};
