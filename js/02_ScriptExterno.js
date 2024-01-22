//alert("script externo")

console.log("Hola esto es un mensaje en consola")

// Definicion y asignacion del valor a una constante
const MAYOR_EDAD = 18;

console.log('El valor de mayor de edad es:', MAYOR_EDAD);
console.log("El valor de mayor de edad es:" + MAYOR_EDAD);

const miCoche = {
    matricula: '0000AAA',
    anyo: 2018,
    marca: 'Audi'
};

console.log('Mi coche es', miCoche);
console.log("Mi coche es" + miCoche);

/**
 * CONSTANTES: Los nombres que usamos es en MAYUSCULA 
 * VARIABLES: Minúsculas
 * SIN ESPACIOS
 */

//Esto es una variable, puedo cambiar su valor  
let variable;
console.log("El valor de la variable", variable);
variable = "Javascript";
console.log("El valor de la variable", variable);


let entero = 2024;
let decimal = 9.5; //Siempre se usa "." NO ",".
let noEsUnNumero = true;


// STRING o cadena de caracteres
let asignatura = "Aplicaciones Web";
let asignatura2 = 'Aplicaciones Web 2';

let nombre = "Julian";
let apellido = "Pérez";
// DOS maneras de concatenar strings....
let nombreCompleto = nombre + " " + apellido;
let nombreCompletoBt = '${nombre} ${apellido}';
console.log(nombreCompleto, nombreCompletoBt);

// BOOLEANOS solo admite true o false (es como un interruptor)
let verdadero = true;
let falso = false;
// También podemos asignar el valor de una operación al comparar.
let resultado = (1 == 1); //True
let num1 = 3;
let num2 = 4;
/**
 * realiza la operacion de num1 + num2 = 7
 * despues divide entre 2 => 3.5
 * Luego compara ese resultado aplicando mauyor igual que 5,       ¿3.5 >= 5? No
 * resultado2 = false
 */
let resultado2 = ((num1 + num2) / 2 >= 5);