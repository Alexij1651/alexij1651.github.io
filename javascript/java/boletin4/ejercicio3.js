let impares = [];

// Llenar con los primeros 100 números impares
for (let i = 0; i < 100; i++) {
    impares[i] = i * 2 + 1;
}

// Recorrer en orden inverso
for (let i = impares.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log("Índice:", i, "Valor:", impares[i]);
    }
}
