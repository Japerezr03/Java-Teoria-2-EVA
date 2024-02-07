//Cuando se cargue la pestaña
window.addEventListener("load", inicial);
window.addEventListener("load",establecerFecha);


function establecerFecha(params) {
    const fechaActual = new Date();

    //1º Obtener el elemento html
    const parrafoFecha = document.getElementById("fecha");
    //2º Comprobar que exista el elemento
    if (parrafoFecha != null); {
        parrafoFecha.innerHTML = fechaActual.toLocaleDateString();
    }
}

function inicial(params) {
    //Primero recuperamos el boton
    const boton = document.getElementById("botonEjecuta");
    if (boton != null);
    boton.addEventListener("click", recuperarDatos);
}

function recuperarDatos(params) {
    const nombreUsuario = document.getElementById("nombre",);
    const edadUsuario = document.getElementById("edad",);

    console.log(nombreUsuario, edadUsuario);
}