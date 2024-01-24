let a = 5;
let b = a++; //POST cremente: primero asigna y luego suma 1 al valor de a 
console.log("Valor de a", a, "Valor de b", b); //b=5 y a=6

let c = 5;
let d = --c; //POST decremento: primero asiga y luego resta 1 al valor de c
console.log("Valor de c", c, "Valor de s", d) //c=5 y d=4

let e = 9;
let f = ++e; //PRE cremento: primero cambia el valor de e (sumando 1) y luego asigna a f
console.log("Valor de e", e, "Valor de f", f); //f=10 y e=10

let g = 4;
let h = --g; //PRE decremento: primero cambia el valor de g (restando 1) y luego asigna a h
console.log("Valor de g", g, "Valor de h", h) //g=3 y h=3

let i = 100;
let j = -i; //Pone negativo un numero serua igual a hacer -100
console.log("Valor de i", i, "Valor de j", j)

let k = 72;
console.log("El resto de dividir:" + 72 + "entre 2 es:" + (k % 2) + "y el cociente es:" + (k / 2))

let base = 2;
let exponente = 3;
console.log(base + " elevada a " + exponente + " es " + (base ** exponente))

//
let exp = Number(prompt("dame un numero", 3))
console.log("2^" + exp + "=" + (2 ** exp))
--exp; //exp = -1
console.log("2^" + exp + "=" + (2 ** exp))
--exp; //exp = -1
console.log("2^" + exp + "=" + (2 ** exp))
--exp; //exp = -1