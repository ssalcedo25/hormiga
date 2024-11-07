document.getElementById('operacionesForm1').addEventListener('submit', function (event) {
    calcularResultado(event, 3);
});

document.getElementById('operacionesForm2').addEventListener('submit', function (event) {
    calcularResultado(event, 9);
});

document.getElementById('operacionesForm3').addEventListener('submit', function (event) {
    calcularResultado(event, 12);
});

function calcularResultado(event, resultadoEsperado) {
    event.preventDefault();

    const form = event.target;
    const sumInputs = form.querySelectorAll('.suma');
    const restInputs = form.querySelectorAll('.resta');
    const resultadoInput = form.querySelector('.resultado');

    let sumaTotal = 0;
    let restaTotal = 0;

    for (const input of sumInputs) {
        const valor = parseInt(input.value);
        if (isNaN(valor) || valor < 0 || valor > 100) {
            Swal.fire({
                title: "Valor no válido",
                text: "Los valores en los campos de suma deben ser números válidos entre 0 y 100.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return;
        }
        sumaTotal += valor;
    }

    for (const input of restInputs) {
        const valor = parseInt(input.value);
        if (isNaN(valor) || valor < 0 || valor > 100) {
            Swal.fire({
                title: "Valor no válido",
                text: "Los valores en los campos de resta deben ser números válidos entre 0 y 100.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return;
        }
        restaTotal += valor;
    }

    const resultado = sumaTotal - restaTotal;
    resultadoInput.value = resultado;
    resultadoInput.style.backgroundColor = 'blueviolet';
    resultadoInput.style.color = 'white';

    if (resultado === resultadoEsperado) {
        Swal.fire({
            title: "Muy bien",
            text: "El cálculo es correcto.",
            icon: "success",
            confirmButtonText: "OK"
        });
    } else {
        Swal.fire({
            title: "Sigue intentando",
            text: "El cálculo no es correcto, sigue intentando.",
            icon: "warning",
            confirmButtonText: "OK"
        });
    }
}
document.getElementById('operacionesForm2').addEventListener('submit', function(event) {
    calcularResultadoFormulario2(event);
});

document.getElementById('operacionesForm3').addEventListener('submit', function(event) {
    calcularResultadoFormulario3(event);
});

function calcularResultadoFormulario2(event) {
    event.preventDefault();

    const form = event.target;
    const sumInputs = form.querySelectorAll('.suma');
    const restInputs = form.querySelectorAll('.resta');
    const resultadoInput = form.querySelector('.resultado');
    
    let sumaTotal = 0;
    let restaTotal = 0;

    for (const input of sumInputs) {
        const valor = parseInt(input.value);
        if (isNaN(valor) || valor < 0 || valor > 100) {
            Swal.fire({
                title: "Valor no válido",
                text: "Los valores en los campos de suma deben ser números válidos entre 0 y 100.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return;
        }
        sumaTotal += valor;
    }

    for (const input of restInputs) {
        const valor = parseInt(input.value);
        if (isNaN(valor) || valor < 0 || valor > 100) {
            Swal.fire({
                title: "Valor no válido",
                text: "Los valores en los campos de resta deben ser números válidos entre 0 y 100.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return;
        }
        restaTotal += valor;
    }

    const resultado = sumaTotal - restaTotal;
    resultadoInput.value = resultado;
    resultadoInput.style.backgroundColor = 'blueviolet';
    resultadoInput.style.color = 'white';

    // Validar el resultado esperado
    if (resultado === 9) {
        Swal.fire({
            title: "Muy bien",
            text: "El cálculo es correcto.",
            icon: "success",
            confirmButtonText: "OK"
        });
    } else {
        Swal.fire({
            title: "Sigue intentando",
            text: "El cálculo no es correcto, sigue intentando.",
            icon: "warning",
            confirmButtonText: "OK"
        });
    }

    // Transferir el resultado al primer input del tercer formulario
    const resultadoForm1 = document.getElementById('resultadoForm1');
    resultadoForm1.value = resultado;
}

function calcularResultadoFormulario3(event) {
    event.preventDefault();

    const form = event.target;
    const resultadoForm1 = parseInt(document.getElementById('resultadoForm1').value);
    const segundoInput = parseInt(form.querySelector('.suma').value);
    const resultadoInput = form.querySelector('.resultado2');

    if (isNaN(resultadoForm1) || isNaN(segundoInput) || resultadoForm1 < 0 || resultadoForm1 > 100 || segundoInput < 0 || segundoInput > 100) {
        Swal.fire({
            title: "Valor no válido",
            text: "Los valores deben ser números válidos entre 0 y 100.",
            icon: "error",
            confirmButtonText: "OK"
        });
        return;
    }

    const resultado = resultadoForm1 + segundoInput;
    resultadoInput.value = resultado;
    resultadoInput.style.backgroundColor = 'blueviolet';
    resultadoInput.style.color = 'white';

    // Validar el resultado esperado
    if (resultado === 12) {
        Swal.fire({
            title: "Muy bien",
            text: "El cálculo es correcto.",
            icon: "success",
            confirmButtonText: "OK"
        });
    } else {
        Swal.fire({
            title: "Sigue intentando",
            text: "El cálculo no es correcto, sigue intentando.",
            icon: "warning",
            confirmButtonText: "OK"
        });
    }
}
