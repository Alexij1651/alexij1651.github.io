const KM_POR_MILLA = 1.60934;

function actv8() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const unidad = document.getElementById('unidad').value;
    const resultado = document.getElementById('resultado');

    if (isNaN(cantidad) || cantidad < 0) {
        resultado.innerHTML = `<div class="error">Introduce una cantidad válida mayor o igual a 0.</div>`;
        return;
    }

    let convertido, etiquetaOrigen, etiquetaDestino;

    if (unidad === 'km') {
        convertido = cantidad / KM_POR_MILLA;
        etiquetaOrigen = 'km';
        etiquetaDestino = 'millas';
    } else {
        convertido = cantidad * KM_POR_MILLA;
        etiquetaOrigen = 'millas';
        etiquetaDestino = 'km';
    }

    resultado.innerHTML = `
        <div class="resultado-oficial">
            <h3>Resultado</h3>
            <p>${cantidad.toFixed(2)} ${etiquetaOrigen} equivalen a:</p>
            <p class="conversion">${convertido.toFixed(4)} ${etiquetaDestino}</p>
            <p><small>Factor: 1 milla = ${KM_POR_MILLA} km</small></p>
        </div>
    `;
}
