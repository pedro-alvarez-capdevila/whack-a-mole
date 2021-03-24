// creo el tablero
const tablero = document.querySelector(".grid");
let tamañoDeMatriz = 4;
const tiempoRestante = document.querySelector('#tiempo-restante');
let score = document.querySelector('#resultado');
let resultado = 0;
let tiempoTranscurrido = tiempoRestante.textContent;

const boton = document.querySelector("#botonInicio");
boton.addEventListener('click', iniciarJuego);



function eliminarTablero() {
    for (let i = 0; i < tamañoDeMatriz; i++) {
        const celda = document.querySelector('.fila' + i);
        celda.remove();
    }
}

function iniciarJuego() {
    tiempoRestante.textContent = 60;
    tiempoTranscurrido = 60;
    document.querySelector('#resultado').textContent = 0
    resultado = 0;
    let tam = document.querySelector('#tamMatriz').textContent;
    eliminarTablero();
    crearTablero(tam);
    tamañoDeMatriz = tam;
    //cambio el tamaño de los cuadrados en caso de que tam sea mayor a 5
    // if(tamañoDeMatriz>5){
    //     for (let i = 0; i < tamañoDeMatriz*tamañoDeMatriz; i++) {
    //         const celda = document.querySelector('.celda' + i);
    //         celda.style.width = "1px"
    //         celda.style.height = "1px"
    //     } 
    // }
}


function crearTablero(tam){
    let id = 0;
    for (let i = 0; i < tam; i++) {
        const fila = document.createElement('div');
        fila.classList.add('fila' + i)
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
function celdaRandom() {
    // busco entre todos y elimino la clase mole
    for (let i = 0; i < tamañoDeMatriz*tamañoDeMatriz; i++) {
        const celda = document.getElementById('celda' + i);
        celda.classList.remove('mole');
    }
    const posicionRandom = Math.floor(Math.random() * tamañoDeMatriz*tamañoDeMatriz);
    const celda = document.getElementById('celda' + posicionRandom);
    celda.classList.add('mole');

    celda.addEventListener('click', clickearMole)
} 

function clickearMole() {
    if(this.classList.contains('mole')){
        resultado++;
    }
    score.textContent = resultado;
}

// ahora tenemos que mover el mole
function moverMole(){
    let timerId = null
    timerId = setInterval(celdaRandom, 800)
}
moverMole();
// contador de tiempo
function countDown() {
    tiempoTranscurrido--
    tiempoRestante.textContent = tiempoTranscurrido;

    if(tiempoTranscurrido === 0){
        clearInterval(timerId)
        alert("juego terminado")
    }
}


let timerId = setInterval(countDown,1000);






