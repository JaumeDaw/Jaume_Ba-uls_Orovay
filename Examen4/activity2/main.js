let num = Math.floor(Math.random() * 3 + 1);

let frase = document.getElementsByClassName("frase")[0];
frase.style.backgroundColor = "white";
frase.style.color = "black";
let intentos = document.getElementById("intentos");

let reiniciarButton = document.getElementById("reiniciar");
reiniciarButton.addEventListener("click", () => reiniciar());
let puzzle = [];
let solution = "";
inicio();

function inicio() {
  getPuzzle();
  Game();
}
function reiniciar() {
  console.log("Reiniciado");
  puzzle = [];
  solution = "";
  getPuzzle();
  Game();
}
function getPuzzle() {
  fetch("https://puzzle.mead.io/puzzle?wordCount=" + num)
    .then((data) => data.json())
    .then((values) => {
      console.log(values.puzzle);
      solution = values.puzzle;
      for (let i = 0; i < solution.length; i++) {
        if (solution[i] != " ") {
          puzzle.push("*");
        } else {
          puzzle.push(" ");
        }
      }
      frase.innerText = puzzle.join("");
    });
}
function endGame() {
  intentos.innerText = "Gran trabajo! Lo adivinaste!";
}
function Game() {
  this.state = "playing";
  this.intentos = 5;
  let tries = () =>{
    intentos.innerText = "Intentos restantes: " + this.intentos;
  }
  tries();
  let html = document.getElementsByTagName("html")[0];
  html.addEventListener("keypress", (ev) => {
    let letter = ev.key;
    console.log(letter);
    if (solution.toLowerCase().includes(letter)) {
      for (let i = 0; i < solution.length; i++) {
        if (solution[i].toLowerCase() == letter) {
          puzzle.splice(i,1,letter)
        } 
      }
      console.log(puzzle);
      frase.innerText = puzzle.join("");
    }
    else{
        this.intentos -=1;
        tries();
    }
    if(this.intentos == 0){
        this.state = "failed";
        intentos.innerText = "Buen intento! La solución era " + solution;
        
    }
    if(solution.toLowerCase() === puzzle.join("")){
        this.state = "ended";
        endGame();
    }
  });
}
