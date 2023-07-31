let usuarios = [];

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let numSocio = document.getElementById("numSocio").value;
    let actividad = document.getElementById("actividad").value;

    if (nombreCompleto === "" || numSocio === "" || actividad === "") {
        return;
    }

    const usuario = {
        nombre: nombreCompleto,
        numeroSocio: numSocio,
        actividad: "",
    };

    switch (actividad) {
        case "1":
            usuario.actividad = "Functional";
            break;
        case "2":
            usuario.actividad = "Crossfit";
            break;
        case "3":
            usuario.actividad = "Cardio";
            break;
        default:
            console.log("Opción inválida");
            return;
    }

    usuarios.push(usuario);

    document.getElementById("nombreCompleto").value = "";
    document.getElementById("numSocio").value = "";
    document.getElementById("actividad").value = "";

    const usuariosJSON = JSON.stringify(usuarios);
    sessionStorage.setItem('usuarios', usuariosJSON);
});

document.getElementById("showUsersButton").addEventListener("click", function() {
    const usuariosJSON = sessionStorage.getItem('usuarios');

    if (usuariosJSON) {
        const usuarios = JSON.parse(usuariosJSON);
        const usuariosPorActividad = {};

        usuarios.forEach((usuario) => {
            const actividad = usuario.actividad;
            if (!usuariosPorActividad[actividad]) {
                usuariosPorActividad[actividad] = [];
            }
            usuariosPorActividad[actividad].push(usuario);
        });

        let contenidoSweetAlert = "<h1>Usuarios por Actividad</h1>";

        for (const actividad in usuariosPorActividad) {
            if (usuariosPorActividad.hasOwnProperty(actividad)) {
                contenidoSweetAlert += `<h2>${actividad}</h2>`;

                usuariosPorActividad[actividad].forEach((usuario) => {
                    contenidoSweetAlert += `<p>Nombre: ${usuario.nombre}, Número de socio: ${usuario.numeroSocio}</p>`;
                });
            }
        }

        Swal.fire({
            icon: 'info',
            title: '',
            html: contenidoSweetAlert,
            confirmButtonText: 'Cerrar'
        });
    } else {
        Swal.fire('No se encontró grupo de usuarios por actividad');
    }
});












