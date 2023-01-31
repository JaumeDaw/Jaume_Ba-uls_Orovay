var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);

function ball() {
  //radi i color

  var radi = Math.random() * (50 - 10) + 10;
  var colour =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

  //posicions inicials

  this.x = Math.random() * window.width;
  this.y = Math.random() * window.height;

  //Velocitats

  this.vx = Math.random() * 10 + 1;
  this.vy = Math.random() * 10 + 1;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, radi, 0, 2 * Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath();

    if(this.y > height || this.y <= 0){
        this.vy = -this.vy
        this.y += this.vy;
    }else{
        this.y += this.vy;
    }
    if(this.x > width || this.x <= 0){
        this.vx = -this.vx
        this.x += this.vx;
    }else{
        this.x += this.vx;
    }
    
    
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
