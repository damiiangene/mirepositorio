// Lista de celus disponibles por modelo
const IphoneModeloDisponibles = {
    12: ['Clásico', 'Mini', 'Pro', 'Pro Max'],
    13: ['Clásico', 'Mini', 'Pro', 'Pro Max'],
    14: ['Clásico', 'Mini', 'Pro', 'Pro Max'],
    15: ['Clásico', 'Mini', 'Pro', 'Pro Max'],};

  // 1. Algoritmo con condicional: Verificar disponibilidad de funda para el modelo seleccionado
function verificarDisponibilidad(modelo) {
    let mensaje = '';

    // Condicional para verificar si hay fundas disponibles para el modelo
    if (IphoneModeloDisponibles[modelo] && IphoneModeloDisponibles[modelo].length > 0) {
    mensaje = '¡Tienes fundas disponibles para tu iphone!';
    } else {
    mensaje = 'Funda no disponible para este modelo';
    }

    // Mostrar el mensaje en un alert
    alert(mensaje);
}

  // 2. Algoritmo con ciclo: Mostrar todos los celus disponibles para el modelo seleccionado
function mostrarFundas() {
     // 1. Preguntar el nombre del usuario
    const nombreUsuario = prompt('¡Hola! Gracias por visitar FundaStars ¿Cuál es tu nombre?');
    
     // 2. Saludar al usuario con su nombre
    alert('¡Bienvenido, ' + nombreUsuario + '! A continuación te haré algunas preguntas para que veas si tu funda esta disponible en estos momentos! En caso de que no, igual te invitamos a ver nuestro catalogo. ¡Se actualiza todo el tiempo!');
    
    // Pedir al usuario que seleccione el modelo
    let modelo = prompt('Selecciona tu iPhone: (12, 13, 14, 15)'); // Obtener el modelo del celular

    // Convertir el valor de 'modelo' a número
    modelo = parseInt(modelo);

    // Verificar si el modelo es válido (entre 12 y 15)
    if (![12, 13, 14, 15].includes(modelo)) {
        alert('Modelo inválido. Debes seleccionar uno de los modelos disponibles (12, 13, 14, 15).');
        return; // Salir si el modelo no es válido
    }

    // Obtener las fundas disponibles para ese modelo
    const fundas = IphoneModeloDisponibles[modelo];

    // Verificar disponibilidad de fundas
    verificarDisponibilidad(modelo);

    // Ciclo para mostrar las fundas disponibles
    if (fundas && fundas.length > 0) {
    let mensajeFundas = 'Modelos disponibles para el Iphone ' + modelo + ':\n';
    for (let i = 0; i < fundas.length; i++) {
        mensajeFundas += (i + 1) + '. ' + fundas[i] + '\n'; // Agregar cada funda al mensaje
    }
      alert(mensajeFundas); // Mostrar las fundas disponibles
    } else {
    alert('No hay fundas disponibles para este modelo');
    }

    // Permitir seleccionar una funda
    let seleccionModeloIphone = prompt('Selecciona el número del módelo que deseas (1, 2, 3 o 4):');

    // Convertir la selección a número
    seleccionModeloIphone = parseInt(seleccionModeloIphone);

    if (seleccionModeloIphone && seleccionModeloIphone >= 1 && seleccionModeloIphone <= fundas.length) {
      alert('Has seleccionado: ' + fundas[seleccionModeloIphone - 1]); // Muestra la funda seleccionada
    } else {
    alert('Selección inválida.');
    }
}

  // Ejecutamos la función principal
mostrarFundas();
