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

        
        const usuariosContainer = document.getElementById('usuariosContainer');

        usuariosContainer.innerHTML = '';

        
        const usuariosPorActividad = {};

        
        usuarios.forEach((usuario) => {
            const actividad = usuario.actividad;
            if (!usuariosPorActividad[actividad]) {
                usuariosPorActividad[actividad] = [];
            }
            usuariosPorActividad[actividad].push(usuario);
        });

        for (const actividad in usuariosPorActividad) {
            if (usuariosPorActividad.hasOwnProperty(actividad)) {
                const actividadElement = document.createElement('h2');
                actividadElement.textContent = actividad;

                
                usuariosContainer.appendChild(actividadElement);

                usuariosPorActividad[actividad].forEach((usuario) => {
                    const usuarioElement = document.createElement('p');
                    usuarioElement.textContent = `Nombre: ${usuario.nombre}, Número de socio: ${usuario.numeroSocio}`;
                    usuariosContainer.appendChild(usuarioElement);
                });
            }
        }
    } else {
        console.log('No se encontró el array de usuarios guardado en el sessionStorage');
    }
});











