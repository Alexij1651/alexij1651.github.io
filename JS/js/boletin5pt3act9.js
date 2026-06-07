function actv9() {
    const texto = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');

    if (texto === '') {
        resultado.innerHTML = `<div class="error">Introduce una cadena de texto para contar sus caracteres.</div>`;
        return;
    }

    const numCaracteres = texto.length;

    resultado.innerHTML = `
        <div class="resultado-oficial">
            <h3>Resultado</h3>
            <p>La cadena <strong>"${texto}"</strong> contiene:</p>
            <p class="numero">${numCaracteres}</p>
            <p>caracteres</p>
        </div>
    `;
}
