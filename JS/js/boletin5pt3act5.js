function actv5() {
    const mes = document.getElementById('mes').value.trim().toLowerCase();
    const resultado = document.getElementById('resultado');

    let estacion;

    if (mes === 'diciembre' || mes === 'enero' || mes === 'febrero') {
        estacion = 'Invierno';
    } else if (mes === 'marzo' || mes === 'abril' || mes === 'mayo') {
        estacion = 'Primavera';
    } else if (mes === 'junio' || mes === 'julio' || mes === 'agosto') {
        estacion = 'Verano';
    } else if (mes === 'septiembre' || mes === 'octubre' || mes === 'noviembre') {
        estacion = 'Otoño';
    } else {
        resultado.innerHTML = `<div class="error">Mes no reconocido. Introduce un mes en español (Ej: Enero).</div>`;
        return;
    }

    resultado.innerHTML = `
        <div class="resultado-oficial">
            <p>El mes <strong>${mes.charAt(0).toUpperCase() + mes.slice(1)}</strong> pertenece a:</p>
            <p class="estacion">${estacion}</p>
        </div>
    `;
}
