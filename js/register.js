document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que el formulario se envíe

        // Obtén los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const identificacion = document.getElementById("identificacion").value;
        const contrasenia = document.getElementById("contrasenia").value;

        // Crea un objeto de usuario
        const user = {
            nombre,
            identificacion,
            contrasenia,
        };

        // Obtén la lista de usuarios del almacenamiento local
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Agrega al nuevo usuario a la lista
        users.push(user);

        // Almacena la lista de usuarios actualizada en el almacenamiento local
        localStorage.setItem("users", JSON.stringify(users));

        // Redirige al usuario a la página de inicio de sesión
        window.location.href = "index.html";
    });
});
