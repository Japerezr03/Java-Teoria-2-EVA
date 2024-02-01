//Nos aseguramos con esto que la pagina se ha cargado completamente
window.addEventListener("load", inicio);
window.addEventListener("load", añadirEventoBtn1)

function añadirEventoBtn1(event)  {
    //Bucamos el boton btn1
    const (boton1 != null){
        boton1.addEventListener("Click",saluda);
    }
}

function inicio(event) {

    /*Acceder al parrafo1 su nombre*/
    const parrafo1 = document.getElementById("parrafo1");
    console.log("parrafo1", parrafo1);
    //Con esto le cambio el texto del parrafo
    if (parrafo1 != null) {
        parrafo1.innerHTML = "HOLA MUNDO CRUEL <br> ES MUY TEMPRANO...";
        //Con esto le cambio el nombre de la clase css
        parrafo1.setAttribute("class", "rojo");
    }

    // Crear un nuevo elemento div
    let nuevoElemento = document.createElement("p");

    // Asignar contenido al nuevo elemento
    nuevoElemento.innerHTML = "¡Parrafo creado con js!";
    nuevoElemento.setAttribute("class", "rojo");
    nuevoElemento.setAttribute("id", "p-hijo-js");

    const divPadre = document.getElementById("div-padre");
    if (divPadre != null) {
        //Añade el elemento nuevo
        divPadre.appendChild(nuevoElemento);
    }
}
