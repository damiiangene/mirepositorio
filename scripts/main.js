// Lista de modelos de iPhone disponibles con sus respectivas fundas y precios de ejemplo
const IphoneModeloDisponibles = {
    12: {
        fundas: ['Clásico', 'Mini', 'Pro', 'Pro Max'],
        precios: [15000, 20000, 25000, 30000] // Precios
    },
    13: {
        fundas: ['Clásico', 'Mini', 'Pro', 'Pro Max'],
        precios: [18000, 22000, 27000, 32000] // Precios
    },
    14: {
        fundas: ['Clásico', 'Mini', 'Pro', 'Pro Max'],
        precios: [19000, 24000, 28000, 35000] // Precios
    },
    15: {
        fundas: ['Clásico', 'Mini', 'Pro', 'Pro Max'],
        precios: [20000, 25000, 30000, 40000] // Precios
    },
};

// Función para verificar disponibilidad de fundas para un modelo específico
function verificarDisponibilidad(modelo) {
    let mensaje = '';
    
    if (IphoneModeloDisponibles[modelo] && IphoneModeloDisponibles[modelo].fundas.length > 0) {
        mensaje = '¡Tienes fundas disponibles para tu iPhone!';
    } else {
        mensaje = 'Funda no disponible para este modelo';
    }
    
    alert(mensaje);
}

// Función para mostrar las fundas disponibles para el modelo seleccionado
function mostrarFundas() {
    // Verificar si el usuario ya completó el proceso y no pedir su nombre de nuevo
    if (localStorage.getItem('compraFinalizada') === 'true') {
        alert('¡Ya completaste los datos! Puedes regresar a la página principal.');
        return;
    }

    const nombreUsuario = prompt('¡Hola! Gracias por visitar FundaStars ¿Cuál es tu nombre?');
    alert('¡Bienvenido, ' + nombreUsuario + '! A continuación te haré algunas preguntas para ver si tu funda está disponible. ¡Si no, puedes ver nuestro catálogo actualizado!');
    
    let modelo = prompt('Selecciona tu iPhone: (12, 13, 14, 15)'); // Obtener el modelo del celular
    modelo = parseInt(modelo);

    if (![12, 13, 14, 15].includes(modelo)) {
        alert('Modelo inválido. Debes seleccionar uno de los modelos disponibles (12, 13, 14, 15).');
        return; // Salir si el modelo no es válido
    }

    const fundas = IphoneModeloDisponibles[modelo].fundas;
    const precios = IphoneModeloDisponibles[modelo].precios;

    verificarDisponibilidad(modelo);

    if (fundas && fundas.length > 0) {
        let mensajeFundas = 'Modelos disponibles para el iPhone ' + modelo + ':\n';
        for (let i = 0; i < fundas.length; i++) {
            mensajeFundas += (i + 1) + '. ' + fundas[i] + ' - Precio: $' + precios[i] + '\n'; // Muestra precio junto con la funda
        }
        alert(mensajeFundas); // Mostrar las fundas disponibles
    } else {
        alert('No hay fundas disponibles para este modelo');
    }

    // Permitir seleccionar una funda y calcular descuento si es necesario
    let seleccionModeloIphone = prompt('Selecciona el número del modelo que deseas (1, 2, 3 o 4), o ingresa "0" para finalizar la compra y regresar a la página web.');

    seleccionModeloIphone = parseInt(seleccionModeloIphone);

    if (seleccionModeloIphone === 0) {
        alert('¡Gracias por visitar FundaStars! Ahora puedes regresar a la página principal.');
        // Guardar en localStorage para recordar que el usuario finalizó
        localStorage.setItem('compraFinalizada', 'true');
        // Redirigir a la página principal
        window.location.href = '/'; // Cambia '/' por la URL de tu página principal
        return; // Salir de la función para evitar seguir el flujo
    }

    if (seleccionModeloIphone && seleccionModeloIphone >= 1 && seleccionModeloIphone <= fundas.length) {
        const fundaSeleccionada = fundas[seleccionModeloIphone - 1];
        const precioSeleccionado = precios[seleccionModeloIphone - 1];
        alert('Has seleccionado: ' + fundaSeleccionada + ' - Precio: $' + precioSeleccionado); // Muestra la funda seleccionada

        // Preguntar si el usuario desea aplicar un descuento
        let aplicarDescuento = prompt('¿Deseas aplicar un descuento de 10% a esta funda? (Sí/No)');

        if (aplicarDescuento.toLowerCase() === 'sí') {
            let descuento = precioSeleccionado * 0.10;
            let precioFinal = precioSeleccionado - descuento;
            alert('El precio final con descuento es: $' + precioFinal);
        }

    } else {
        alert('Selección inválida.');
    }

    // Llamar a la función para realizar operaciones matemáticas o ver más opciones
    realizarOperaciones();
}

// Función para realizar operaciones matemáticas como descuentos, sumas de precios, etc.
function realizarOperaciones() {
    let operacion = prompt('Elige una operación matemática:\n1. Calcular descuento adicional\n2. Ver precio total por más de una funda\n3. Volver al inicio\n4. Finalizar interacción y regresar a la página web');

    switch (operacion) {
        case '1':
            calcularDescuentoAdicional();
            break;
        case '2':
            calcularTotalPorFundas();
            break;
        case '3':
            alert('Volviendo al inicio...');
            mostrarFundas(); // Volver a la selección de fundas
            break;
        case '4':
            alert('¡Gracias por visitar FundaStars! Ahora puedes regresar a la página principal.');
            // Guardar en localStorage para recordar que el usuario finalizó
            localStorage.setItem('compraFinalizada', 'true');
            window.location.href = '/'; // Cambia '/' por la URL de tu página principal
            break;
        default:
            alert('Opción no válida. Intenta nuevamente.');
            realizarOperaciones();
            break;
    }
}

// Función para calcular un descuento adicional
function calcularDescuentoAdicional() {
    let precio = obtenerNumero('Introduce el precio de la funda:');
    let descuento = obtenerNumero('Introduce el porcentaje de descuento:');
    let precioConDescuento = precio - (precio * (descuento / 100));
    alert('El precio con descuento es: $' + precioConDescuento.toFixed(2));
    realizarOperaciones();
}

// Función para calcular el precio total de varias fundas
function calcularTotalPorFundas() {
    let cantidad = obtenerNumero('¿Cuántas fundas deseas comprar?');
    let precioUnidad = obtenerNumero('¿Cuál es el precio de una funda?');
    let total = cantidad * precioUnidad;
    alert('El total por ' + cantidad + ' fundas es: $' + total.toFixed(2));
    realizarOperaciones();
}

// Función para obtener un número con validación
function obtenerNumero(mensaje) {
    let numero = prompt(mensaje);
    numero = parseFloat(numero);

    // Validación de número
    while (isNaN(numero)) {
        numero = prompt('Por favor, ingresa un número válido:');
        numero = parseFloat(numero);
    }

    return numero;
}

// Iniciar el flujo llamando a la función principal
mostrarFundas();
