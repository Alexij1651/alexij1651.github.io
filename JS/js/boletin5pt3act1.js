function actv1() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const fechaNac = document.getElementById('fechaNacimiento').value;
    const contenedor = document.getElementById('mesaje');

    if (!nombre || !apellidos || !fechaNac) {
        alert("Por favor, rellene todos los campos del formulario.");
        return;
    }

    
    const fechaNacimiento = new Date(fechaNacValue);
    const fechaActual = new Date();
    
    
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    
    const diferenciaMeses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    const diferenciaDias = fechaActual.getDate() - fechaNacimiento.getDate();

    
    
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
        edad--;
    }
    const esMayor = edad >= 18;
    const estado = esMayor ? "es mayor de Edad" : "es menor de Edad";
    const claseCss = esMayor ? "txt-mayor" : "txt-menor";

    
    contenedor.innerHTML = `
        <div class="resultado-oficial">
            <h3>Resumen de la Solicitud</h3>
            <p><strong>Candidato:</strong> ${nombre} ${apellidos}</p>
            <p><strong>Año de nacimiento:</strong> ${fechaNacimiento.getFullYear()}</p>
            <p class="${claseCss}">${nombre} tiene ${edad} años y ${estado}.</p>
        </div>
    `;
}