document.addEventListener('DOMContentLoaded', () => {

    // Función para agregar animaciones a los elementos de la cuadrícula cuando cargan
    function animarCuadrícula() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animacion-cargada');  // Aparece con animación
            }, index * 200);  // Retraso progresivo en cada elemento de la cuadrícula
        });
    }

    // Efectos de hover en las tarjetas (agrandado y sombra)
    function hoverTarjetas() {
        const tarjetas = document.querySelectorAll('.card');
        tarjetas.forEach(tarjeta => {
            tarjeta.addEventListener('mouseenter', () => {
                tarjeta.classList.add('hovered');  // Activa agrandado y sombra
            });
            tarjeta.addEventListener('mouseleave', () => {
                tarjeta.classList.remove('hovered');  // Elimina el efecto cuando sale el mouse
            });
        });
    }

    // Activar las funciones
    animarCuadrícula();
    hoverTarjetas();
});
