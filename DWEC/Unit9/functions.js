export function temporizador(tiempo) {
  var promise = new Promise((resolve, reject) => {
    var temp = setTimeout(() => {
      clearTimeout(temp2);
      resolve("Tiempo Completado");
    }, tiempo);
    var temp2 = setTimeout(() => {
      reject("El tiempo no va bien");
    }, tiempo);
  });
  return promise;
}

export function contador(number,element, interval, func){
    
    let cont = document.createElement("h2");
    for(let i = number; number>0;i--){
        cont.innerHTML = i;

    }
    element.appendChild(cont);
    return "done";
}