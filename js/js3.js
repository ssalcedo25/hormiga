let intervalo; // Define la variable de intervalo fuera de la función para acceso global

function tempo() {
    const boton = document.getElementById('boton');
    const temporizador = document.getElementById('temporizador');
    boton.style.display = 'none';
    temporizador.style.display = 'flex';
    temporizador.style.justifyContent = 'space-around';
    temporizador.style.width = '100%';
    const displayMinutos = document.querySelector('#min p');
    const displaySegundos = document.querySelector('#segundos p');

    // Obtener el tiempo inicial del párrafo en minutos y convertirlo a milisegundos
    let tiempoTotal = parseInt(displayMinutos.innerText) * 60000; // Minutos a milisegundos

    intervalo = setInterval(() => {
        const minutos = Math.floor(tiempoTotal / 60000);
        const segundos = Math.floor((tiempoTotal % 60000) / 1000);
        displayMinutos.innerText = minutos;
        displaySegundos.innerText = segundos.toString().padStart(2, '0');

        if (tiempoTotal <= 0) {
            clearInterval(intervalo);
            displayMinutos.innerText = '00';
            displaySegundos.innerText = '00';
            Swal.fire({
                title: "¡Tiempo agotado!",
                text: "No has logrado todos los retos a tiempo.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
        tiempoTotal -= 1000;
    }, 1000);
}

function desplegar(idContenedor) {
    const parrafo = document.getElementById(idContenedor);
    parrafo.style.display = (parrafo.style.display === 'none') ? 'block' : 'none';
}

function completarReto(boton) {
    const indiceReto = parseInt(boton.id.replace('completado', ''));
    const retos = document.querySelectorAll('.ContenedorReto');
    const contadorCompletados = document.getElementById('completados').querySelector('p');
    const totalRetos = retos.length;

    // Cambiar el color del botón a verde
    boton.classList.add('completado');

    // Cambiar el color del h2 correspondiente a verde
    const h2 = retos[indiceReto - 1].querySelector('h2');
    h2.classList.add('completado');

    if (indiceReto <= totalRetos && parseInt(contadorCompletados.innerText) < totalRetos) {
        if (indiceReto < totalRetos) {
            retos[indiceReto].style.display = 'block'; // Mostrar el siguiente reto
            document.getElementById('completado' + (indiceReto + 1)).style.display = 'block'; // Mostrar el siguiente botón
        }
        contadorCompletados.innerText = parseInt(contadorCompletados.innerText) + 1;
    }
}


function completarUltimoReto() {
    clearInterval(intervalo); // Detener el temporizador
    const min = parseInt(document.querySelector('#min p').innerText);
    const seg = parseInt(document.querySelector('#segundos p').innerText);

    // Cambiar el color del botón a verde
    const boton = document.getElementById('completado3');
    boton.classList.add('completado');
    
    // Cambiar el color del h2 correspondiente a verde
    const reto = document.getElementById('tres');
    const h2 = reto.querySelector('h2');
    h2.classList.add('completado');

    // Sumar 1 al valor del completados
    const contadorCompletados = document.getElementById('completados').querySelector('p');
    contadorCompletados.innerText = parseInt(contadorCompletados.innerText) + 1;

    // Mostrar la alerta usando SweetAlert2
    if (min > 0 || seg > 0) {
        Swal.fire({
            title: "Felicidades!",
            text: `Has terminado el juego. El tiempo que te ha sobrado es: ${min} minutos y ${seg} segundos.`,
            icon: "success",
            confirmButtonText: "OK"
        });
    } else {
        Swal.fire({
            title: "¡Tiempo agotado!",
            text: "No has logrado todos los retos a tiempo.",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
}const palabraSecreta = "abajo";
let letrasAdivinadas = [];
const intentosMaximos = 6;
let intentos = 0;

function iniciarJuego() {
    letrasAdivinadas = [];
    intentos = 0;

    const juegoDiv = document.getElementById('juego');
    juegoDiv.innerHTML = '';

    const palabraDiv = document.createElement('div');
    palabraDiv.id = 'palabra';
    juegoDiv.appendChild(palabraDiv);
    
    const letrasDiv = document.createElement('div');
    letrasDiv.id = 'letras';
    juegoDiv.appendChild(letrasDiv);

    mostrarPalabra();
    mostrarLetras();

    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    input.oninput = () => {
        const letra = input.value.toLowerCase();
        comprobarLetra(letra);
        input.value = '';
    };
    juegoDiv.appendChild(input);
}

function reiniciarJuego() {
    iniciarJuego();
}

function comprobarLetra(letra) {
    if (!palabraSecreta.includes(letra)) {
        intentos++;
    }
    letrasAdivinadas.push(letra);
    mostrarPalabra();
    mostrarLetras();
    if (intentos >= intentosMaximos) {
        finJuego(false);
    } else if (!document.getElementById('palabra').innerText.includes('_')) {
        finJuego(true);
    }
}

function mostrarPalabra() {
    const palabraDiv = document.getElementById('palabra');
    palabraDiv.innerHTML = '';
    for (const letra of palabraSecreta) {
        const span = document.createElement('span');
        span.textContent = letrasAdivinadas.includes(letra) ? letra : '_';
        span.style.fontSize = '20px';  // Aumentar el tamaño de la letra en un 3%
        span.style.color = '#C7E64F';    // Cambiar el color de la letra a verde
        span.style.marginBottom = '10px';  // Añadir margen inferior de 2px
        palabraDiv.appendChild(span);
    }
}



function mostrarLetras() {
    const letrasDiv = document.getElementById('letras');
    letrasDiv.innerHTML = `Intentos restantes: ${intentosMaximos - intentos}<br>Letras escritas: ${letrasAdivinadas.join(', ')}`;
    letrasDiv.style.marginTop = '5px'; // Añadir margen superior de 5px
}


function finJuego(ganado) {
    const juegoDiv = document.getElementById('juego');
    juegoDiv.innerHTML = ganado ?  `¡Felicidades, has ganado! La palabra secreta es: ${palabraSecreta}.`:'¡Sigue intentado!' ;

    const reiniciarButton = document.createElement('button');
    reiniciarButton.textContent = 'Reiniciar Juego';
    reiniciarButton.onclick = reiniciarJuego;
    juegoDiv.appendChild(reiniciarButton);
}


function actualizarImagenPortada() {
    const img = document.getElementById('portada-img');
    const ancho = window.innerWidth;

    if (ancho < 600) {
        img.src = 'estilos/portada_mobil.gif'; // Imagen para móvil
    } else if (ancho >= 600 && ancho < 900) {
        img.src = 'estilos/portada_tablet.gif'; // Imagen para tablet
    } else {
        img.src = 'estilos/portada.gif'; // Imagen para ordenador
    }
}

// Llamar a la función al cargar la página
window.onload = actualizarImagenPortada;

// Llamar a la función cada vez que se redimensione la ventana
window.onresize = actualizarImagenPortada;
