const recetas = [
    { id: 1, nombrereceta: "Salmorejo", ingredientes: "tomate,aceite,pan" },
    { id: 2, nombrereceta: "Gachas", ingredientes: "harina,agua,azucar" },
    { id: 3, nombrereceta: "Migas", ingredientes: "pan,ajos,aceite" }
];

function formatearIngredientes(str) {
    const partes = str.split(',');
    if (partes.length === 1) return partes[0];
    const ultimo = partes.pop();
    return partes.join(', ') + ' y ' + ultimo;
}

function actv12() {
    const resultado = document.getElementById('resultado');

    let filas = recetas.map((r, index) => {
        const esUltimo = index === recetas.length - 1;
        const td = esUltimo ? 'td style="font-weight:bold"' : 'td';
        return `
            <tr>
                <${td}>${r.id}</${td.split(' ')[0]}>
                <${td}>${r.nombrereceta}</${td.split(' ')[0]}>
                <${td}>${formatearIngredientes(r.ingredientes)}</${td.split(' ')[0]}>
            </tr>`;
    }).join('');

    resultado.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Receta</th>
                    <th>Ingredientes</th>
                </tr>
            </thead>
            <tbody>
                ${filas}
            </tbody>
        </table>
    `;
}
