document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtiene los valores del formulario
        const identificacion = document.getElementById("identificacion").value;
        const contrasenia = document.getElementById("contrasenia").value;

        // Obtiene la lista de usuarios del almacenamiento local
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Busca al usuario por correo electrónico
        const user = users.find(user => user.identificacion === identificacion);

        if (user && user.contrasenia === contrasenia) {
            // Inicio de sesión exitoso, redirige a la página principal
            window.location.href = "./startbootstrap-scrolling-nav-gh-pages/index.html";
        } else {
            alert("Usuario o contraseña incorrecta");
        }
    });
});
