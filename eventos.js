let botonSaludar = document.querySelector('button');

botonSaludar.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('¡Hola!');
});

let boton = document.getElementById('boton');

boton.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('¡Hola! Soy el div');
});