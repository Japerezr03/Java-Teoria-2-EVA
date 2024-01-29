//WHILE Mientras que se cumpla la condicion ejecuta {}
let contador = 0
while (contador <= 10) {
    console.log("Valor del contador", contador);
    //Tenemos que hacer algo para que llegue a cumplirse la condicion
    contador++; //Contador = contador + 1
}

let cont = 1;
do {
    console.log("Con do-whil, valor del cont" + cont)
    cont++ //Cuidado si no lo pongo creo un bucle
} while (cont <= 3)