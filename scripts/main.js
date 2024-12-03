// Lista de fundas disponibles por modelo
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
    const modelo = prompt('Selecciona tu iphone: (12, 13, 14, 15)'); // Obtener el modelo del celular
    const fundas = IphoneModeloDisponibles[modelo.toLowerCase()]; // Convertimos a minúsculas para que sea insensible a mayúsculas

    // Verificar disponibilidad de celus
    verificarDisponibilidad(modelo.toLowerCase());

    // Ciclo para mostrar las fundas disponibles
    if (fundas && fundas.length > 0) {
    let mensajeFundas = 'Modelos disponibles para ' + modelo + ':\n';
    for (let i = 0; i < fundas.length; i++) {
        mensajeFundas += (i + 1) + '. ' + fundas[i] + '\n'; // Agregar cada funda al mensaje
    }
      alert(mensajeFundas); // Mostrar las fundas disponibles
    } else {
    alert('No hay fundas disponibles para este modelo');
    }

    // Permitir seleccionar una funda
    let seleccionModeloIphone = prompt('Selecciona el número del módelo que deseas (1, 2, 3 o 4):');

    if (seleccionModeloIphone && seleccionModeloIphone >= 1 && seleccionModeloIphone <= fundas.length) {
      alert('Has seleccionado: ' + fundas[seleccionModeloIphone - 1]); // Muestra la funda seleccionada
    } else {
    alert('Selección inválida.');
    }
}

  // Ejecutamos la función principal
mostrarFundas();
