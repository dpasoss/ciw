
    document.addEventListener("DOMContentLoaded", function () {
        // Habilitar submenús en dropdowns
        var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');

        dropdownSubmenus.forEach(function (submenu) {
            submenu.addEventListener('click', function () {
                var submenuDropdown = submenu.querySelector('.dropdown-menu');
                if (submenuDropdown) {
                    submenuDropdown.classList.add('show');
                }
            });

            submenu.addEventListener('mouseout', function () {
                var submenuDropdown = submenu.querySelector('.dropdown-menu');
                if (submenuDropdown) {
                    submenuDropdown.classList.remove('show');
                }
            });
        });
    });





    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop: true, // Hacer que el carrusel sea infinito
            margin: 10,
            nav: true, // Mostrar flechas de navegación
            autoplay: true, // Desplazar automáticamente
            autoplayTimeout: 4000, // Tiempo entre desplazamientos
            autoplayHoverPause: true, // Pausar al pasar el mouse
            responsive: {
                0: {
                    items: 1 // Mostrar 1 imagen en pantallas pequeñas
                },
                600: {
                    items: 2 // Mostrar 2 imágenes en pantallas medianas
                },
                1000: {
                    items: 3 // Mostrar 3 imágenes en pantallas grandes
                }
            }
        });
      });
      