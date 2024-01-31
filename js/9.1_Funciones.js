//ACTIVIDADES:
//Crea una función llamada celsiusToFahrenheit que convierta una temperatura dada en grados Celsius a Fahrenheit. La fórmula es: F = (C * 9/5) + 32.

/*
function calcularGrados(Celsius) {
    return ((Celsius * 9 / 5) + 32);
}


function pedirGrados() {
    let aCelsius = Number(prompt("Introduce una temporada en º Celsius"));
    if (!isNaN(aCelsius)) { //if (isNaN (celsius) == false)
        return aCelsius;
    }

}

const grados = pedirGrados();
console.log (grados);

if (grados!= undefined){
    console.log (grados+"ºC son =")+ calcularGrados)

}
*/

//Crea una función llamada calcularDescuento que tome un total y un porcentaje de descuen


function calcularDescuento(total, descuento) {
    return total - (total * (descuento/100))
}

console.log ("Descuetno")