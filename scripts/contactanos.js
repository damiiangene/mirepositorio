// Función para guardar el formulario de contacto en localStorage
function guardarFormulario(event) {
    event.preventDefault();  // Prevenir el envío del formulario para manejarlo manualmente

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear objeto con datos del formulario
    const formulario = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        fecha: new Date().toISOString()
    };

    // Guardar el objeto en localStorage (podemos almacenar múltiples envíos, por ejemplo)
    let formulariosGuardados = JSON.parse(localStorage.getItem('formularios')) || [];
    formulariosGuardados.push(formulario);
    localStorage.setItem('formularios', JSON.stringify(formulariosGuardados));

    // Mostrar mensaje de éxito
    mostrarMensajeDeExito();

    // Limpiar el formulario
    document.getElementById('contact-form').reset();
}

// Función para mostrar el mensaje de éxito
function mostrarMensajeDeExito() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.style.display = 'block';  // Mostrar el mensaje de éxito

    // Después de 3 segundos, ocultar el mensaje de éxito
    setTimeout(() => {
        responseMessage.style.display = 'none';
    }, 3000);
}

// Función para inicializar los eventos
function inicializarEventos() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', guardarFormulario);  // Asignar el evento de envío del formulario
}

// Se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    inicializarEventos();  // Inicializar los eventos
});
