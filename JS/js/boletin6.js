function aplicarColores(colorPar, colorImpar) {
    document.querySelectorAll('.fila-par').forEach(fila => {
        fila.style.backgroundColor = colorPar;
    });
    document.querySelectorAll('.fila-impar').forEach(fila => {
        fila.style.backgroundColor = colorImpar;
    });
}

function sincronizarSelectores(colorPar, colorImpar) {
    const selectPar = document.getElementById('colorPar');
    const selectImpar = document.getElementById('colorImpar');

    for (const opt of selectPar.options) {
        if (opt.value === colorPar) { selectPar.value = colorPar; break; }
    }
    for (const opt of selectImpar.options) {
        if (opt.value === colorImpar) { selectImpar.value = colorImpar; break; }
    }
}

function cambiarColor() {
    const colorPar = document.getElementById('colorPar').value;
    const colorImpar = document.getElementById('colorImpar').value;

    localStorage.setItem('colorPar', colorPar);
    localStorage.setItem('colorImpar', colorImpar);

    aplicarColores(colorPar, colorImpar);
}

document.addEventListener('DOMContentLoaded', () => {
    const colorPar = localStorage.getItem('colorPar') || '#efebe9';
    const colorImpar = localStorage.getItem('colorImpar') || '#ffffff';

    sincronizarSelectores(colorPar, colorImpar);
    aplicarColores(colorPar, colorImpar);
});
