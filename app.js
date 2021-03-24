// creo el tablero
const tablero = document.querySelector(".grid");
let tamañoDeMatriz = 4;

function crearTablero(tam){
    let id = 0;
    for (let i = 0; i < tam; i++) {
        const fila = document.createElement('div');
       for (let j = 0; j < tam; j++) {
        const celda = document.createElement('div');
        celda.setAttribute('id', 'celda' + id);
        celda.classList.add('celda');
        fila.appendChild(celda);
        id++;
       }
       tablero.appendChild(fila);
    }
}

crearTablero(tamañoDeMatriz);

// ahora agrego la imagen que va cambiando entre todos los divs
const boton = document.querySelector("#botonInicio");
boton.addEventListener('click', iniciarJuego);

function cambiarFondo(id){
    const celdaSeleccionada = document.querySelector(id);
    celdaSeleccionada.style.backgroundColor = "blue";
}

function iniciarJuego () {
    
}
