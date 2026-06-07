function actv10() {
    const palabra1 = document.getElementById('palabra1').value.trim();
    const palabra2 = document.getElementById('palabra2').value.trim();

    if (!palabra1 || !palabra2) {
        alert('Por favor, introduce las dos palabras.');
        return;
    }

    let mensaje;

    if (palabra1.length > palabra2.length) {
        mensaje = `"${palabra1}" es más larga (${palabra1.length} caracteres) que "${palabra2}" (${palabra2.length} caracteres).`;
    } else if (palabra2.length > palabra1.length) {
        mensaje = `"${palabra2}" es más larga (${palabra2.length} caracteres) que "${palabra1}" (${palabra1.length} caracteres).`;
    } else {
        mensaje = `"${palabra1}" y "${palabra2}" tienen la misma longitud (${palabra1.length} caracteres).`;
    }

    alert(mensaje);
}
