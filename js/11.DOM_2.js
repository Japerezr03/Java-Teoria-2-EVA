//Cuando se cargue la pestaña
window.addEventListener("load", inicial);
window.addEventListener("load", establecerFecha);
window.addEventListener("load",cambioGenero);

function cambioGenero(params) {
    const genero = document.getElementById ("genero");
    if (genero !=null){
        genero.addEventListener ("change",actualizarImagen);
        //
    }
}

function actualizarImagen(params) {
    console.log ("Elemento que ha lanzado el evento", evento);
    const seleccionado = evento.target.value;
}

function establecerFecha(params) {


    //1º Obtener el elemento html
    const parrafoFecha = document.getElementById("fecha");
    //2º Comprobar que exista el elemento
    if (parrafoFecha != null); {

        //Ejecutar continuamente cada X tiempo
        setInterval(() => {
            let fechaActual = new Date();
            parrafoFecha.innerHTML = fechaActual.toLocaleDateString();
        }
            , 100); //1 segundo = 1000
    }
}

function inicial(params) {
    //primiero recuperamos el boton
    const boton = document.getElementById("botonEjecuta");
    if (boton != null) {
        boton.addEventListener("click", recuperarDatos);
    }
}


function recuperarDatos(params) {
    const nombreUsuario = document.getElementById("nombre");
    const edadUsuario = document.getElementById("edad");

    //Solo debe entrar cuando los inputs existan
    if (nombreUsuario != null && edadUsuario != null) {
        //con .value obtenemos lo que ha introducido el usuario.
        if (nombreUsuario.value == "") {
            alert("Debes introducir tu nombre");
            return false;
        }
        if (edadUsuario.value == "") {
            alert("Debes introducir tu edad");
            return false;
        }

        let resultado = document.getElementById("resultado");
        let actual = document.getElementById("actual");
        if (resultado != null && actual != null) {
            let dentro18 = Number(edadUsuario.value) + 18;

            let anyio = "años";
            if (edadUsuario.value == 1) {
                anyio = "año";
            }

            actual.innerHTML = actual.innerHTML + "<br>"
                + nombreUsuario.value + " tiene " + edadUsuario.value + " " + anyio +
                " cuando pase 18 años";

            resultado.innerHTML = resultado.innerHTML + "<br>"
                + nombreUsuario.value + " tendrá " + dentro18 + " años" +
                " cuando pase 18 años";


        }
    }



}