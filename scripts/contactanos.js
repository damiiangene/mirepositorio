// Función para guardar el formulario de contacto en localStorage
function guardarFormulario(event) {
    event.preventDefault();  // Prevenir el envío del formulario para manejarlo manualmente

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear un objeto con los datos del formulario
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

    // Mostrar mensaje de éxito y ocultar el formulario
    document.getElementById('response-message').style.display = 'block';
    document.getElementById('contact-form').reset();  // Limpiar el formulario
}

// Función para inicializar los eventos
function inicializarEventos() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', guardarFormulario);  // Asignar el evento de envío del formulario
}

// Función que se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    inicializarEventos();  // Inicializar los eventos
});
