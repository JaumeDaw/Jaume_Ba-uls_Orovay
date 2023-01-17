export function useSquares(){


let square9x9 = document.createElement("div");

square9x9.style.display = "grid";
square9x9.style.gridTemplateColumns = "1fr 1fr 1fr";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

do {
  let square = document.createElement("div");
  square.setAttribute('class', "Square");
  number = Math.floor(Math.random()*numbers.length);
  square.value = number;
  numbers.splice(numbers.indexOf(number),1);
  square9x9.appendChild(square);
} while (numbers.length > 1);

console.log(square9x9)
return square9x9;
}