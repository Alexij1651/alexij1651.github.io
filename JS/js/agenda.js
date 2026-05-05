const agenda = new Map();

function agregarUsuario(dni, nombre) {
    if (!dni || !nombre) {
        console.error("Error: Debes proporcionar tanto el DNI como el nombre.");
        return;
    }
    agenda.set(dni, nombre);
    console.log(`Usuario añadido: [${dni}] - ${nombre}`);
}

function mostrarUsuarios() {
    if (agenda.size === 0) {
        console.log("La agenda está vacía.");
        return;
    }

    console.log("\n--- Lista de Usuarios ---");
    agenda.forEach((nombre, dni) => {
        console.log(`DNI: ${dni} | Nombre: ${nombre}`);
    });
    console.log("-------------------------\n");
}

// --- Pruebas de funcionamiento ---
agregarUsuario("12345678A", "Juan Pérez");
agregarUsuario("87654321B", "María García");
agregarUsuario("11223344C", "Carlos Ruiz");

mostrarUsuarios();