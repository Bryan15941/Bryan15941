
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Datos de ejemplo para validación, usando correos electrónicos
    const users = [
        { email: 'julioavebtura@certus.edu.pe', password: '12345', dashboard: 'dashboard1.html' },
        { email: 'romulopizarro@certus.edu.pe', password: '12345', dashboard: 'dashboard2.html' },
        { email: 'robertomartinez@certus.edu.pe', password: '12345', dashboard: 'dashboard3.html' }
    ];

    const email = document.getElementById('email').value;  // Obtener el valor del correo electrónico
    const password = document.getElementById('password').value;  // Obtener el valor de la contraseña

    // Validación básica de campos vacíos
    if (email.trim() === '' || password.trim() === '') {
        document.getElementById('error-message').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('error-message').style.display = 'block';
        return; // Detener la ejecución si hay campos vacíos
    }


    // Buscar el usuario en el array usando el correo electrónico
    const user = users.find(u => u.email === email && u.password === password);

    // Validación de las credenciales
    if (user) {
        window.location.href = user.dashboard;  // Redirige al panel específico del usuario
    } else {
        document.getElementById('error-message').textContent = 'Correo electrónico o contraseña incorrectos.';
        document.getElementById('error-message').style.display = 'block';  // Muestra el mensaje de error
    }
});