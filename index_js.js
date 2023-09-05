document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registroForm");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar el envío del formulario por defecto

        // Valores del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        // Crear un objeto con los datos del formulario
        const formData = {
            nombre,
            apellido,
            fechaNacimiento
        };

        // Enviar los datos en formato json al servidor
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // importante para que el servidor pueda entender el formato de los datos enviados.
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data)
        })

    });
});
