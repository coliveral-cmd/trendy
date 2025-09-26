
    // Get the menu icon and the menu list
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    // Add a click event listener to the icon
    menuIcon.addEventListener('click', () => {
        // Toggle the 'active' class on the menu list
        menu.classList.toggle('active');
    });
// Seleccionamos todos los botones que tienen la clase 'btn-buy'
const botonesComprar = document.querySelectorAll('.btn-buy');
const numero = '51930509864'; // Reemplaza con tu número de WhatsApp

// Recorremos cada botón encontrado
botonesComprar.forEach(boton => {
    // A cada botón le añadimos un "escuchador de eventos" para el clic
    boton.addEventListener('click', function() {
        // Obtenemos el nombre del producto desde el atributo 'data-product' del botón en el que se hizo clic
        const producto = this.getAttribute('data-product');
        const mensaje = `Hola, quiero comprar el producto: ${producto}.`;

        // Codificamos el mensaje y construimos la URL
        const mensajeCodificado = encodeURIComponent(mensaje);
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numero}&text=${mensajeCodificado}`;

        // Redireccionamos a la URL de WhatsApp
        window.location.href = urlWhatsApp;
    });
});


 // Script de JavaScript para la funcionalidad
        document.addEventListener("DOMContentLoaded", function() {
            const modal = document.getElementById("anuncioModal");
            const cerrarBtn = document.querySelector(".cerrar-btn");
        
            // Función para mostrar el modal
            function mostrarModal() {
                modal.style.display = "flex";
            }
        
            // Función para ocultar el modal
            function ocultarModal() {
                modal.style.display = "none";
            }
        
            // Muestra el modal cuando la página se carga
            mostrarModal();
        
            // Cuando el usuario hace clic en el botón de cerrar, oculta el modal
            cerrarBtn.addEventListener("click", ocultarModal);
        
            // Cuando el usuario hace clic fuera del modal, también se oculta
            window.addEventListener("click", function(event) {
                if (event.target == modal) {
                    ocultarModal();
                }
            });
        });