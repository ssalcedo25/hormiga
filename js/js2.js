function tempo() {
    // Obtener los elementos del botón y el contenedor del temporizador
    const boton = document.getElementById('boton');
    const temporizador = document.getElementById('temporizador');

    // Ocultar el botón y mostrar el temporizador
    boton.style.display = 'none';
    temporizador.style.display = 'flex';
    temporizador.style.justifyContent = 'space-around';
    temporizador.style.width = '100%';

    // Iniciar el temporizador
    let tiempoTotal = 2700000; // 45 minutos en milisegundos
    const displayMinutos = document.getElementById('min');
    const displaySegundos = document.getElementById('segundos');

    const intervalo = setInterval(() => {
        // Calcular minutos y segundos restantes
        const minutos = Math.floor(tiempoTotal / 60000);
        const segundos = Math.floor((tiempoTotal % 60000) / 1000);

        // Actualizar la visualización
        displayMinutos.textContent = minutos;
        displaySegundos.textContent = segundos.toString().padStart(2, '0');

        // Si el tiempo llega a 0, detener el intervalo
        if (tiempoTotal <= 0) {
            clearInterval(intervalo);
            displayMinutos.textContent = '00';
            displaySegundos.textContent = '00';
            // Aquí puedes agregar una alerta o cualquier otra acción al finalizar
            alert("¡Tiempo agotado!");
        }

        // Decrementar el tiempo total
        tiempoTotal -= 1000;
    }, 1000);
}

function desplegar(idContenedor){
    const parrafo = document.getElementById(idContenedor);
    if( parrafo.style.display == 'none'){
        parrafo.style.display = 'block';
    } else{
        parrafo.style.display = 'none';
    }
    
}


function completarReto(boton) {
    // Obtener el índice del reto actual (basado en el ID del botón)
    const indiceReto = boton.id.replace('completado', '');

    window.alert(indiceReto);
  
    // Obtener los divs de los retos, el contador de completados y el total de retos
    const retos = document.querySelector('.ContenedorReto');
    const contadorCompletados = document.getElementById('completados').querySelector('p').textContent;
    const totalRetos = retos.length;

    window.alert(retos);
    window.alert(contadorCompletados);
    window.alert(totalRetos);
  
    // Verificar si el reto actual es válido y si hay más retos
    if (indiceReto <= totalRetos && parseInt(contadorCompletados.textContent) < totalRetos) {
      // Ocultar el reto actual
      retos[indiceReto - 1].style.display = 'none';
      window.alert('entra en mostrar el sigueinte reto ');
  
      // Mostrar el siguiente reto (si existe)
      window.alert('Reto actual'+indiceReto + 'Retos Totales'+ totalRetos);
      if (indiceReto < totalRetos) {
        retos[indiceReto].style.display = 'block';
        // Mostrar el botón del siguiente reto
        document.getElementById('completado' + (indiceReto + 1)).style.display = 'block';
        window.alert('muestra el siguiente reto y oculta el boton ');
      }
  
      // Incrementar el contador de retos completados
      contadorCompletados.textContent = parseInt(contadorCompletados.textContent) + 1;
    } 
  }

