alert("Alertt");
console.log("console log")

const MAYOR_EDAD = 18;
console.log("El valor de mayor edad es: ", MAYOR_EDAD);

const OBJECT = {
    licensePlace: "012ABC",
    year: 2024,
    brand: "Porsche"
};

//const {matricula, anyo} = miCoche;
//const miCoche[""matricula];


console.log("Mi coche es: ");


/*
* CONSTANTES: Los nombres que usamos es en mayuscula
* VARIABLES: Minuculas
* SIN ESPACIS:
*/

// Esto es un variable, puedo cambiar su valor y se define con let
let variable;
console.log("El valoir de la variable", variable);
variable = "Javascript";
console.log("El valor de la variable", variable);


// NUMBER
let entero = 2024
let decimal = 9.5; //Siempre se define decimal con . NO ,
let noEsUnNumero = NaN;


// STRING o Canenas de caracteres
let asignatura = "Aplicaciones web";
let asignatura2 = "Aplicaciones Web 2";

let nombre = "Julian";
let apellido = "Pérez";
// Dos manera de concadenar string
let NombreCompleto = nombre + " " + apellido;
let NombreCompletoBt = `${nombre} ${apellido}`; //Commilla que está al lado de la P
console.log(NombreCompleto, NombreCompletoBt);

//Boolean (true/false)
let esVerdadero = true;
let esFalso = false;
// Tambien podemos asignar el valor de una operacion al comparar
let resultado = (1 == 1); //true
let num1 = 3;
let num2 = 4;
/*
* Realiza la operacion de num1 + num2 = 7
* Despues duvude entre 2 => 3.5  7/2 = 3.5
* Luego compara ese resultado aplicando mayor igual que 5, ¿3.5 >= 5? NO
* Resultado2= false
*/
let resultado2 = ((num1 + num2) / 2 >= 5);

