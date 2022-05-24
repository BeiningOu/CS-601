console.log("Hello World");

function get(id) {
  return document.getElementById(id);
}

let submit = get("submit");

submit.onclick = function () {
  let username = get("name");
  let numberOne = get("first-number");
  let numberTwo = get("second-number");
  let sum = get("sum-number");
  let twoSum = Number(numberOne.value) + Number(numberTwo.value);
  sum.innerText = twoSum;

  console.log(twoSum);
};
