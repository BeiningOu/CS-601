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
  let a = Math.ceil(Math.random() * 5) / 10; // (0-0.6] for 'a'
  // we use ceil here for a because we don't want it fully transparent.
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

console.log(randomColor());

// Ball class
class Ball {
  constructor(x, y, r, color, velX, velY) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.velX = velX;
    this.velY = velY;
    this.drawBall();
  }

  // drawBall method
  drawBall() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI); //arc to draw a circle
    ctx.fillStyle = this.color; //set color of the ball
    ctx.fill();
    console.log(this.x, this.y, this.r);
  }

  // update method
  updateBall() {
    if (this.x + this.r >= canvas.width) {
      // when reach X boundary
      this.velX = -this.velX;
    }
    if (this.x - this.r <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.r >= canvas.height) {
      //when reach Y boundary
      this.velY = -this.velY;
    }
    if (this.y - this.r <= 0) {
      this.velY = -this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
    this.drawBall();
  }
}

// ball creator
function createBall() {
  let canvasW = canvas.width;
  let canvasH = canvas.height;
  //console.log(canvasW, canvasH);
  let ballR = Math.random() * 10 + 5;
  let ballX = Math.random() * (canvasW - 2 * ballR) + ballR;
  // involve radius to avoid boundary
  let ballY = Math.random() * (canvasH - 2 * ballR) + ballR;
  let colorOfBall = randomColor();
  let velX = Math.random();
  let velY = Math.random();
  return new Ball(ballX, ballY, ballR, colorOfBall, velX, velY);
}

// now we create 35 balls and keep in the array
let balls = [];
for (let i = 0; i < 35; i++) {
  balls.push(createBall());
}

//loop it and call updateBall
function animate() {
  //clean the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < balls.length; i++) {
    balls[i].updateBall();
    balls[i].drawBall();
  }
  requestAnimationFrame(animate);
}

animate();
