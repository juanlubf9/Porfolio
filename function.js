
//Creación del boton descargar curriculum
function imprimirCurriculum() {
    window.print();
}

let imprimirButton = document.createElement("button")
imprimirButton.textContent = "Imprimir Curriculum"
imprimirButton.id = "imprimir"
imprimirButton.addEventListener("click", imprimirCurriculum)

let cabeceraDerecha = document.getElementById("cabecera")
cabeceraDerecha.appendChild(imprimirButton)


// Añadiendo contenido al pulsar mostrar más
let mostrarMasButton = document.getElementById("mostrarMas")
let competenciasContainer = document.getElementById("competenciasContainer")

mostrarMasButton.addEventListener("click", botonHandler)

function botonHandler() {
    let competenciasHTML = `<ul>
                                <li>
                                    <h3>Idiomas</h3>
                                    Lengua materna: ESPAÑOL<br>
                                    Idioma complementario: INGLÉS - Nivel B2 en: Comprensión auditiva, comprensión lectora, <br>
                                    interacción oral y expresión escrita.
                                </li>
                                <li>
                                    <h3>Organización</h3>
                                    Disponibilidad total, puntualidad, capacidad de resolución de problemas, aprendizaje rápido,<br> 
                                    trabajo en equipo, capacidad de autoaprendizaje y teletrabajo.
                                </li>
                                <li>
                                    <h3>Permiso de conducción</h3>
                                    Tipo B y coche propio.
                                </li>
                            </ul>`

    if (competenciasContainer.innerHTML === "") {
        competenciasContainer.innerHTML = competenciasHTML
        mostrarMasButton.textContent = "Mostrar menos"
    } else {
        competenciasContainer.innerHTML = ""
        mostrarMasButton.textContent = "Mostrar más"
    }
}


//Slither de imagenes
let fotos = [
    "https://ametic.es/sites/default/files//esri_cuadrado.png",
    "https://www.somosiberoamerica.org/wp-content/uploads/2017/03/LOGO-UCM-2.jpg",
    "https://play-lh.googleusercontent.com/2ZeJ7GR9MAbFEVu9Cho8BIf3KEA9oLC-zCW5BY1QIT6oajGp6jCItqECBL4S4JFQVC0",
    "https://media.licdn.com/dms/image/D4D03AQESuWJvkezBLg/profile-displayphoto-shrink_800_800/0/1678705696466?e=2147483647&v=beta&t=xaxwkgYcd0dSIniehMoLQQK0_sFaB9Wje3WKUU4R8Lo"
]

let fotoActual = 0

function cambiarFoto() {
    let foto = document.querySelector(".foto")
    foto.src = fotos[fotoActual]

    if (fotoActual + 1 === fotos.length) {
        fotoActual = 0
    } else {
        fotoActual = fotoActual + 1
    }
}
setInterval(cambiarFoto, 3000)