window.alert("Reservá ya tu entrada para la próxima función");

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Nombre: ' + name);
    console.log('Correo electrónico: ' + email);
    console.log('Mensaje: ' + message);
    document.getElementById('contactForm').reset();
});