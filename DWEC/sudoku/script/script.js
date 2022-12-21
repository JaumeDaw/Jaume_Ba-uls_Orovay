let tabla = document.getElementById("sudoku");

let cols = [];
let valoresRandom = [1,2,3,4,5,6,7,8,9];
valoresRandom = valoresRandom.sort(function() {return Math.random() - 0.5});

for(let i = 0; i < 3; i++){
    let fila = document.createElement('tr');
    tabla.appendChild(fila);
    fila.setAttribute("class","fila" + (i+1));
    for(let j = 0; j < 3; j++){
        let col = document.createElement('td');
        col.value = 0;
        cols.push(col);
        fila.appendChild(col);
        col.setAttribute("class","col"+(j+1))
        col.addEventListener('click', function(ev){
            console.log(col.parentElement.className + " " + col.className);
        });
        col.addEventListener('contextmenu', function(ev){
            ev.preventDefault();
            if(col.textContent == ""){
                col.textContent = ++col.value;
                console.log(col.value + " 1")
            }else{
                if(col.value ==9){
                    col.value = 1;
                    col.textContent = col.value;
                    console.log(col.value + " 2")
                }else{
                    col.textContent = ++col.value;
                    console.log(col.value + " 3")
                }
                
            }
            
        });
    }
}
console.log(cols)

