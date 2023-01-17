import useSquares from "./square";

let sudoku = document.getElementById("sudoku");
sudoku.style.height= "50px";
sudoku.style.width= "50px";

let button = document.getElementById("b");
button.style.background = "red"
button.addEventListener(
  "mousedown", console.log("a")
  /*() => {
    console.log("a")

  for (let i = 0; i < 9; i++) {
    let square = useSquares();
    sudoku.appendChild(square);
  }
}*/
);
