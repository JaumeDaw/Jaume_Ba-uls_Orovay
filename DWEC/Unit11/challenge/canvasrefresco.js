var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// obtenemos las dimensiones del canvas
var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);
// posiciones
var x = width;
var y = 0;
// velocidad
var vx = 1;
var vy = 2;
// animation loop   
function animar() {
  // limpia canvas
  ctx.clearRect(0, 0, width, height);
  // dibuja un cuadrado de 10x10
  ctx.fillRect(x, y, 10, 10);
  // actualizamos la posicion
  x -= vx;
  y += vy;
  // animamos
  requestAnimationFrame(animar);
  // verificamos que no se salga de rango
  if (y > height || x < 0) {
    x = width;
    y = 0;
  }
}
animar();
