console.log("Hello World");

function get(id) {
  return document.getElementById(id);
}

let submit = get("submit");
let tryAgain = get('try-again');
tryAgain.style.visibility = "hidden";

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
    let smallnum = get("big-small");
    smallnum.innerText = " small number";
    console.log("small number");
  }
  let calculator = get("calculator")
  calculator.style.visibility = "hidden";
  tryAgain.style.visibility = "visible";
};


tryAgain.onclick = function(){


}