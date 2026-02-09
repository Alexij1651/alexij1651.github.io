let pares = [];

// Llenar con los primeros 100 números pares
for (let i = 0; i < 100; i++) {
    pares[i] = i * 2;
}

// Mostrar los valores con índice impar
for (let i = 0; i < pares.length; i++) {
    if (i % 2 !== 0) {
        console.log("Índice:", i, "Valor:", pares[i]);
    }
}
