const FILAS = 20;
        const COLUMNAS = 20;
        let tesoroX, tesoroY, intentos, juegoTerminado;

        const gridElement = document.getElementById('mapa');
        const intentosElement = document.getElementById('intentos');
        const mensajeElement = document.getElementById('mensaje');
        const pistaElement = document.getElementById('pista');

        function iniciarJuego() {
            // Posición del tesoro
            tesoroX = Math.floor(Math.random() * FILAS);
            tesoroY = Math.floor(Math.random() * COLUMNAS);
            intentos = 10;
            juegoTerminado = false;

            // Reset de textos
            intentosElement.textContent = intentos;
            mensajeElement.textContent = "¡Buena suerte, pirata!";
            pistaElement.textContent = "";
            gridElement.innerHTML = "";

            // Generar celdas
            for (let f = 0; f < FILAS; f++) {
                for (let c = 0; c < COLUMNAS; c++) {
                    const div = document.createElement('div');
                    div.className = 'celda';
                    div.dataset.f = f;
                    div.dataset.c = c;
                    div.onclick = verificar;
                    gridElement.appendChild(div);
                }
            }
            console.log("Mapa generado. Tesoro en:", tesoroX, tesoroY);
        }

        function verificar(e) {
            if (juegoTerminado) return;

            const celda = e.target;
            const f = parseInt(celda.dataset.f);
            const c = parseInt(celda.dataset.c);

            if (f === tesoroX && c === tesoroY) {
                celda.classList.add('tesoro');
                celda.innerHTML = "💰";
                mensajeElement.textContent = "¡LO ENCONTRASTE! 🎉";
                juegoTerminado = true;
            } else {
                intentos--;
                intentosElement.textContent = intentos;
                celda.classList.add('fallo');

                // Pista
                let p = "El tesoro está al ";
                if (f < tesoroX) p += "SUR ";
                if (f > tesoroX) p += "NORTE ";
                if (c < tesoroY) p += "ESTE ";
                if (c > tesoroY) p += "OESTE ";
                pistaElement.textContent = p;

                if (intentos <= 0) {
                    mensajeElement.textContent = "Perdiste. Estaba en Fila " + tesoroX + ", Columna " + tesoroY;
                    juegoTerminado = true;
                    revelarTesoro();
                }
            }
        }

        function revelarTesoro() {
            const celdas = document.querySelectorAll('.celda');
            celdas.forEach(celda => {
                if (parseInt(celda.dataset.f) === tesoroX && parseInt(celda.dataset.c) === tesoroY) {
                    celda.classList.add('tesoro');
                    celda.innerHTML = "📍";
                }
            });
        }

        // Ejecutar al cargar
        window.onload = iniciarJuego;