//IF

const edad = Number(prompt("Dame tu edad"))

//edad > 17 es lo mismo que decir edad >=18
if (edad >= 18) {
    console.log("Puedes votar");
}
console.log("Tu edad es:", edad); //Tu edad es: " + edad

//IF-ELSE
let edad1 = Number(prompt("Dame tu edad"))

//edad > 17 es lo mismo que decir edad >=18
if (edad1 >= 18) {
    console.log("Puedes votar");
} else {
    console.log("Debes eperar para votar")
}
console.log("Tu edad es:", edad1); //Tu edad es: " + edad