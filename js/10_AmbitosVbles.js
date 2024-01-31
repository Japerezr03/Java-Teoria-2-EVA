let variableGlobal = 100
const contanteGlobal = "HOLA";

function funcion1() {
    variableGlobal = 9999;

    console.log("Valor de variableGlobal" + variableGloba);
    console.log("Valor de constanteGlobal" + contanteGlobal);

    let variableLocal = 10;
    let variableConstant = "adios";

    console.log("Valor de variableGlobal" + variableGlobal);
    console.log("Valor de constanteGlobal" + contanteGlobal);

}

console.log("Valor de variableGlobal desde fuera de la funcion" + variableGlobal);
console.log("Valor de variableGlobal desde fuera de la funcion" + variableConstant);

funcion1();

console.log("Valor de variableGlobal desde fuera de la funcion" + variableGlobal);
console.log("Valor de variableGlobal desde fuera de la funcion" + variableConstant);

/*Esto da error, estamos intentando acceder a una variable y constante que esta definida dentro de una fucion */
//
//
