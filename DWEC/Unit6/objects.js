/* function Point(x,y){
    this.x = x;
    this.y = y;
    this.mostrarCoordenades=()=> `(${this.x},${this.y})`;
    this.change = (x2,y2)=>{
        this.x = x2;
        this.y = y2;
    };
    this.copy = () =>{
        return new Point(this.x,this.y);
    }
    this.equals = (Point) =>
         (this.x === Point.x && this.y === Point.y);
    
    this.addition = (p1) => new Point((this.x + p1.x),(this.y + p1.y));
    this.getAbs = (p1) => {
        let a = Math.abs(this.x-p1.x);
        let b = Math.abs(this.y-p1.y);
        a = Math.pow(a,2);
        b = Math.pow(b,2);
        return (Math.sqrt(a+b));
    }
    this.toString = () => ("("+this.x+","+this.y+")");
}
let point = new Point(0,0);
console.log("punt 1 coordenades 1: " + point.mostrarCoordenades());
point.change(1,1);
console.log("punt 1 coordenades 2: " + point.mostrarCoordenades());
let pointB = point.copy();
console.log("punt 2 coordenades 1 copiades de punt 1: " + pointB.mostrarCoordenades());
console.log(point.equals(pointB));
pointB.change(10.4,10.4);
console.log("punt 2 coordenades 2 copiades de punt 1: " + pointB.mostrarCoordenades());
console.log(point.equals(pointB));
let pointC = point.addition(pointB);
console.log("punt 3 coordenades 1: " + pointC.mostrarCoordenades());
console.log(point.getAbs(pointB));
//document.write(point.toString());

let a = new Point(3,4);
console.log(a.__proto__);
Point.prototype.copy = () => {return new Point(this.x,this.y)};
console.log(a.__proto__);
Point.prototype.z=60;
console.log(a.__proto__);

let b = new Point(2,5);
console.log(b.__proto__);
a.z=10;
Point.prototype.z=100;
console.log(a.z);
console.log(b.z);

let ar = [1,2,3];
console.log(ar.__proto__);
Array.prototype.mean = function() { let suma = this.reduce((c,v) =>c+v,0); return (suma/this.length);}
ar.mean();
console.log(ar.__proto__);
console.log(ar.mean()); */