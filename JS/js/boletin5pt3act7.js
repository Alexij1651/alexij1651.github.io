function actv7() {
    const nombre = document.getElementById('nombre').value.trim();
    const provinciaSelect = document.getElementById('provincia');
    const pueblo = document.getElementById('pueblo').value.trim();
    const resultado = document.getElementById('resultado');

    if (!nombre || !provinciaSelect.value || !pueblo) {
        resultado.innerHTML = `<div class="error">Por favor, rellena todos los campos.</div>`;
        return;
    }

    const gentilicio = provinciaSelect.value;
    const provincia = provinciaSelect.options[provinciaSelect.selectedIndex].text;

    resultado.innerHTML = `
        <div class="resultado-oficial">
            <p class="frase">"${nombre}, eres ${gentilicio} de ${pueblo}"</p>
            <p>Provincia: <strong>${provincia}</strong></p>
        </div>
    `;
}
