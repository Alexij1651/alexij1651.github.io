function actv4() {
    const mes = document.getElementById('mes').value.trim().toLowerCase();
    const resultado = document.getElementById('resultado');

    let estacion;

    switch (mes) {
        case 'diciembre':
        case 'enero':
        case 'febrero':
            estacion = 'Invierno';
            break;
        case 'marzo':
        case 'abril':
        case 'mayo':
            estacion = 'Primavera';
            break;
        case 'junio':
        case 'julio':
        case 'agosto':
            estacion = 'Verano';
            break;
        case 'septiembre':
        case 'octubre':
        case 'noviembre':
            estacion = 'Otoño';
            break;
        default:
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
