const a=new Map([[1, "Optimal"],[2,"Noteworthy"],[3,"Noteworthy"],
[4,"Excellent"],[5,"Improvable"],[6,"Excellent"],[7,"Noteworthy"]])
//I create the map we have to use
console.log(a);
console.log(a.__proto__);
//I associate the map to the prototype and create a function associated to that prototype
Map.prototype.invertMap = function () {
    let mapInverse = new Map();//Creation of the map we will return
    for(let [num,valor] of this){//looks into the key-values of the array
        if(!mapInverse.has(valor)){
        //if the new map hasn't that key( value in the original array ) inside, puts inside the new map
            mapInverse.set(valor,num + "");
        }else{
        //if it has the key, the value is changed, adding the new number.    
            let nouValor = mapInverse.get(valor) + "," + num;
            mapInverse.set(valor,nouValor);
        }
    }
    return mapInverse;
}
console.log(a.__proto__);
console.log(a.invertMap());
