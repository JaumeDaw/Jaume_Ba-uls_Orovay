let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let result = document.getElementById('result')

let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multi = document.getElementById('multi');
let divi = document.getElementById('divi');
let borrar = document.getElementById('borrar');

suma.addEventListener('mousedown', function(ev){
    result.style.color = "black";
    if(firstNumber.value != "" && secondNumber.value != ""){
        firstNumber.value = parseFloat(firstNumber.value);
        secondNumber.value = parseFloat(secondNumber.value);
        ///console.log(parseInt(firstNumber.value) + parseInt(secondNumber.value));
        result.textContent = (parseFloat(firstNumber.value) + parseFloat(secondNumber.value)).toFixed(2);
    }
    // firstNumber.value = null;
    // secondNumber.value = null
});

resta.addEventListener('mousedown', function(ev){
    result.style.color = "black";
    if(firstNumber.value != "" && secondNumber.value != ""){
        firstNumber.value = parseFloat(firstNumber.value);
        secondNumber.value = parseFloat(secondNumber.value);
        ///console.log(parseInt(firstNumber.value) + parseInt(secondNumber.value));
        result.textContent = (parseInt(firstNumber.value) - parseInt(secondNumber.value)).toFixed(2);
    }
    // firstNumber.value = null;
    // secondNumber.value = null
});

multi.addEventListener('mousedown', function(ev){
    result.style.color = "black";
    if(firstNumber.value != "" && secondNumber.value != ""){
        firstNumber.value = parseFloat(firstNumber.value);
        secondNumber.value = parseFloat(secondNumber.value);
        ///console.log(parseInt(firstNumber.value) + parseInt(secondNumber.value));
        result.textContent = (parseInt(firstNumber.value) * parseInt(secondNumber.value)).toFixed(2);
    }
    // firstNumber.value = null;
    // secondNumber.value = null
});

divi.addEventListener('mousedown', function(ev){
    result.style.color = "black";
    if(firstNumber.value != "" && secondNumber.value != ""){
        firstNumber.value = parseFloat(firstNumber.value);
        secondNumber.value = parseFloat(secondNumber.value);
        if(firstNumber.value !== 0){
            result.textContent = (parseInt(firstNumber.value) / parseInt(secondNumber.value)).toFixed(2);
        }
    }
    // firstNumber.value = null;
    // secondNumber.value = null
});

borrar.addEventListener('mousedown', function(ev){
    firstNumber.value = null;
    secondNumber.value = null;
    //result.textContent = "\xa0";
})

