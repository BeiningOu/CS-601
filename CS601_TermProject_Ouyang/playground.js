console.log("Hi this is the happy balls project");

function get(id) {
  return document.getElementById(id);
}

let canvas = get("happy-balls");
let ctx = canvas.getContext("2d");
//  get canvasRenderingContent2D object, necessary to start drawing

// get random color
function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = Math.ceil(Math.random() * 10) / 10; // (0-1] for a
  // we use ceil here for a because we don't want it fully transparent.
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

console.log(randomColor());

// drawBall
function drawBall() {
  let ballX= Math.random() * 20;
  let ballY= Math.random() * 20;
  let ballR= Math.random() * 20;
  let colorOfBall = randomColor();
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballR, 0, 2 * Math.PI); //arc to draw a circle
  ctx.fillStyle = colorOfBall; //set color of the ball
  ctx.fill();
}

drawBall();
