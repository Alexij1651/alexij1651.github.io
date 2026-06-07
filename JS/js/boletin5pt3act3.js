function actv3() {
    const estaciones = ["Invierno", "Primavera", "Verano", "Otoño"];
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero < 1 || numero > 4) {
        resultado.innerHTML = `<div class="resultado-oficial"><p class="error">Introduce un número entre 1 y 4.</p></div>`;
        return;
    }

    const estacion = estaciones[numero - 1];

    resultado.innerHTML = `
        <div class="resultado-oficial">
            <h3>Resultado</h3>
            <p>El número <strong>${numero}</strong> corresponde a:</p>
            <p class="estacion"><strong>${estacion}</strong></p>
        </div>
    `;
}
