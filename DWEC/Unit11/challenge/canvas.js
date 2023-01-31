var canvas = document.getElementById("canvas");
canvas.style.backgroundColor = "lightblue";
var ctx = canvas.getContext("2d");
var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);

function ball() {
  //radi i color

  var radi = Math.floor(Math.random() * (50 - 10) + 10);
  var colour =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

  //posicions inicials

  this.x = Math.floor(Math.random() * window.width);
  if(this.x+radi >= width){
    this.x -= radi;
  }
  if(this.x-radi <= 0){
    this.x += radi;
  }
  this.y = Math.floor(Math.random() * window.height);
  if(this.y+radi >=height){
    this.y -= radi;
  }
  if(this.y-radi <= 0){
    this.y += radi;
  }

  //Direcció
  let direccio = 1;
  if (Math.random() * (10 - 1) + 1 > 5) {
    direccio = -1;
  }
  //Velocitats

  this.vx = direccio * (Math.random() * 8 + 1);
  this.vy = direccio * (Math.random() * 8 + 1);

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, radi, 0, 2 * Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath();

    if (this.y+radi > height || this.y-radi <= 0) {
      this.vy = -this.vy;
    }
    if (this.x+radi > width || this.x-radi <= 0) {
      this.vx = -this.vx;
      this.x += this.vx;
    }
    this.x += this.vx;
    this.y += this.vy;
  };
}
let balls = [];
for (let i = 0; i < 50; i++) {
  balls.push(new ball());
}
function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let ball of balls) {
    ball.draw();
  }
  requestAnimationFrame(animate);
}
animate();
