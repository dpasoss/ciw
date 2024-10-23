
document.addEventListener('DOMContentLoaded', function() {
    // Activar la animación del contenido hero
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('visible'); // Añadir clase para activar la animación

    // Establece la fecha objetivo para el 20 de noviembre de 2024
    const cuentaRegresivaFecha = new Date("2024-11-20T00:00:00").getTime();

    // Almacenar valores finales para la animación
    let diasFinal, horasFinal, minutosFinal, segundosFinal;

    function actualizarContador() {
        const ahora = new Date().getTime();
        const distancia = cuentaRegresivaFecha - ahora;

        // Cálculos de tiempo
        diasFinal = Math.floor(distancia / (1000 * 60 * 60 * 24));
        horasFinal = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutosFinal = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        segundosFinal = Math.floor((distancia % (1000 * 60)) / 1000);

        // Solo animar si hay tiempo restante
        if (distancia > 0) {
            animarContador(document.getElementById("dias"), diasFinal);
            animarContador(document.getElementById("horas"), horasFinal);
            animarContador(document.getElementById("minutos"), minutosFinal);
            animarContador(document.getElementById("segundos"), segundosFinal);
        } else {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "¡El gran día ha llegado!";
        }
    }

    function animarContador(element, valorFinal) {
        let valorActual = parseInt(element.innerHTML) || 0;
        
        // Asegura que el contador no se pase del valor final
        if (valorActual < valorFinal) {
            const intervalo = setInterval(() => {
                if (valorActual < valorFinal) {
                    valorActual++;
                    element.innerHTML = valorActual.toString().padStart(2, '0');
                } else {
                    clearInterval(intervalo);
                    element.innerHTML = valorFinal.toString().padStart(2, '0'); // Asegura que se muestre el valor final
                }
            }, 30); // Ajusta la velocidad de incremento aquí
        } else {
            // Si el valor actual ya es mayor o igual que el final, asegúrate de mostrar el final
            element.innerHTML = valorFinal.toString().padStart(2, '0');
        }
    }

    // Actualiza el contador cada segundo
    const x = setInterval(actualizarContador, 1000);
});