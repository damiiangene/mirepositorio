// Función para manejar el hover en las imágenes de ofertas
function manejarHoverImagen() {
    const ofertas = document.querySelectorAll('.grid-item');
    ofertas.forEach(oferta => {
        oferta.addEventListener('mouseenter', () => {
            oferta.classList.add('hovered');
        });
        oferta.addEventListener('mouseleave', () => {
            oferta.classList.remove('hovered');
        });
    });
}

// Función para cargar más información sobre una oferta
function cargarMasInformacion() {
    const ofertas = document.querySelectorAll('.grid-item');
    ofertas.forEach(oferta => {
        const descripcion = oferta.querySelector('p');
        oferta.addEventListener('click', () => {
            // Mostrar u ocultar más información al hacer clic en la oferta
            descripcion.classList.toggle('show-more');
        });
    });
}

// Función que genera una animación o transición de las ofertas
function animacionOfertas() {
    const ofertas = document.querySelectorAll('.grid-item');
    ofertas.forEach((oferta, index) => {
        oferta.style.transition = `transform 0.5s ease-in-out ${index * 0.2}s`; // Efecto escalonado
        oferta.classList.add('animacion-cargada'); // Clase para animación de entrada
    });
}

// Función principal para inicializar los eventos
function inicializarEventos() {
    manejarHoverImagen();
    cargarMasInformacion();
    animacionOfertas();
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', inicializarEventos);
