const FILAS = 20;
const COLUMNAS = 20;

let tesoroX, tesoroY, intentos, juegoTerminado;

function iniciarJuego() {
    // Resetear variables de estado
    tesoroX = Math.floor(Math.random() * FILAS);
    tesoroY = Math.floor(Math.random() * COLUMNAS);
    intentos = 10; // Según el HTML
    juegoTerminado = false;

    // Limpiar UI
    const mapa = document.getElementById("mapa");
    mapa.innerHTML = "";
    document.getElementById("intentos").textContent = intentos;
    document.getElementById("pista").textContent = "";
    document.getElementById("mensaje").textContent = "Haz clic en una cuadrícula para excavar";

    // Generar la cuadrícula
    for (let f = 0; f < FILAS; f++) {
        for (let c = 0; c < COLUMNAS; c++) {
            const celda = document.createElement("div");
            celda.classList.add("celda");
            celda.addEventListener("click", () => realizarJugada(f, c, celda));
            mapa.appendChild(celda);
        }
    }
}

function realizarJugada(x, y, elemento) {
    if (juegoTerminado || elemento.classList.contains("visitada")) return;

    if (x === tesoroX && y === tesoroY) {
        elemento.classList.add("tesoro");
        elemento.textContent = "👑";
        document.getElementById("mensaje").textContent = "¡HAS ENCONTRADO EL TESORO!";
        juegoTerminado = true;
    } else {
        intentos--;
        document.getElementById("intentos").textContent = intentos;
        elemento.classList.add("visitada");
        elemento.textContent = "❌";

        // Generar pista
        let pista = "El tesoro está al ";
        if (x < tesoroX) pista += "Sur ";
        if (x > tesoroX) pista += "Norte ";
        if (y < tesoroY) pista += "Este ";
        if (y > tesoroY) pista += "Oeste ";

        document.getElementById("pista").textContent = "Pista: " + pista;

        if (intentos <= 0) {
            document.getElementById("mensaje").textContent = `Game Over. El tesoro estaba en [${tesoroX}, ${tesoroY}]`;
            juegoTerminado = true;
        }
    }
}

// Iniciar al cargar la página
window.onload = iniciarJuego;