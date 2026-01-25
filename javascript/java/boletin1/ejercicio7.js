let continuar = true;

for (let i = 1; i <= 10 && continuar; i++) {
    continuar = confirm(`¿Es la ${i} vez que te pregunto si quieres continuar?`);
}

if (continuar) {
    alert("Finalizado: se alcanzó el máximo de 10 preguntas");
} else {
    alert("Finalizado: el usuario decidió no continuar");
}
