//Cuando se cargue la pestaña
window.addEventListener("load", inicial);

function inicial(params) {
    //Primero recuperamos el boton
    const boton = document.getElementById("botonEjecuta");
    if (boton != null);
    boton.addEventListener("click", recuperarDatos);
}

function recuperarDatos(params) {
    const nombreUsuario = document.getElementById("nombre",);
    const edadUsuario = document.getElementById ("edad",);

    console.log (nombreUsuario, edadUsuario);
}