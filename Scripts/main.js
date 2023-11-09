document.getElementById('formulario-reserva').addEventListener('submit', function (event) {
    

    var name = document.getElementById('nombre').value; 
    var email = document.getElementById('email').value;
    var movie = document.getElementById('pelicula').value;
    var date = document.getElementById('dia-hora').value;
    var tickets = document.getElementById('tickets').value;

     if (name.trim() === "" || email.trim() === "" || movie.trim() === "" || date.trim() === "" || tickets.trim() === "" ) {
            alert("Por favor, complete todos los campos obligatorios.");
            event.preventDefault(); 
        }
    });