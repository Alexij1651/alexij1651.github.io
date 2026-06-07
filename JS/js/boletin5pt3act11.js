function actv11() {
    const n = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(n) || n < 0) {
        resultado.innerHTML = `<div class="error">Introduce un número entero mayor o igual a 0.</div>`;
        return;
    }

    let suma = 0;
    const terminos = [];

    for (let i = 0; i <= n; i++) {
        suma += i;
        terminos.push(i);
    }

    const serie = terminos.join(' + ');

    resultado.innerHTML = `
        <div class="resultado-oficial">
            <h3>Sumatorio de 0 a ${n}</h3>
            <p class="serie">${serie} = </p>
            <p class="total">${suma}</p>
        </div>
    `;
}
