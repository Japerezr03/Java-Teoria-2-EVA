//IF
const edad = Number(prompt("Dame tu edad"));

//edad > 17 es lo mismo que decir edad >=18
if (edad >= 18) {
    console.log("Puedes votar");
}
console.log("Tu edad es:", edad); //Tu edad es: " + edad

//IF-ELSE
let edad1 = Number(prompt("Dame tu edad"));

//edad > 17 es lo mismo que decir edad >=18
if (edad1 >= 18) {
    console.log("Puedes votar");
} else {
    console.log("Debes eperar para votar");
}
console.log("Tu edad es:", edad1); //Tu edad es: " + edad

//SWICH
const nota = Number(prompt("Nota del examen"));
switch (nota) {
    case 4: case 3: case 2: case 1: case 0:
        console.log("Tienes que hacer la recuperación");
        //Hay que porner el break para que no siga ejecutando
        break;
    //Por defecto
    default:
        console.log("Te vas a hacer la FCT");
        break;
}

//Mensaje para cada día de la semana
