function actv6() {
    const nombre = document.getElementById('nombre').value.trim();
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const resultado = document.getElementById('resultado');

    if (!nombre || isNaN(cantidad) || cantidad < 0) {
        resultado.innerHTML = `<div class="error">Por favor, introduce un nombre y una cantidad válida.</div>`;
        return;
    }

    let porcentajeIVA;

    if (cantidad >= 5000) {
        porcentajeIVA = 10;
    } else if (cantidad > 3000) {
        porcentajeIVA = 15;
    } else {
        porcentajeIVA = 21;
    }

    const iva = cantidad * (porcentajeIVA / 100);
    const total = cantidad + iva;

    resultado.innerHTML = `
        <div class="resultado-oficial">
            <h3>Resumen de Pago</h3>
            <p><strong>Cliente:</strong> ${nombre}</p>
            <p><strong>Cantidad base:</strong> ${cantidad.toFixed(2)} €</p>
            <p><strong>IVA aplicado:</strong> ${porcentajeIVA}% (${iva.toFixed(2)} €)</p>
            <p class="total">Total a pagar: ${total.toFixed(2)} €</p>
        </div>
    `;
}
