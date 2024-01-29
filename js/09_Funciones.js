/*
ACTIVIDADES:
Cálculo del Área del Rectángulo: Define una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y altura) y devuelva el área del rectángulo. Llama varias veces a la función con distintos datos..
*/

function calcularAreaRectangulo(ancho, alto) {
    return (ancho * alto);
}
console.log("Ancho=7 y alto=9" + calcularAreaRectangulo(7, 9));

function probarFunciones() {
    let ancho = Number(prompt("Dame el ancho "));
    let alto = Number(prompt("Dame el alto "));
    //isNaN devuelve true si no ha podido convertir a numero

    if (isNaN(alto) == false && isNaN(ancho) == false) {
        console.log("El area es" + calcularAreaRectangulo(ancho, alto));
    } else {
        console.log("Debes introducir numeros")
    }
}
//Ejecuta
probarFunciones();
let numero;
do {
    numero = Number(prompt("Numero"));
    console.log("Has introducido:", numero);
} while (!isNaN(numero)); //es lo mismo !isNaN (numero)