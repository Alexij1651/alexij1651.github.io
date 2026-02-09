let n = Number(prompt("Introduce el número de elementos"));

let vector = [];

// Introducir valores desordenados
for (let i = 0; i < n; i++) {
    vector[i] = Number(prompt("Introduce el valor " + (i + 1)));
}

console.log("Vector desordenado:", vector);

// Método burbuja
for (let i = 0; i < vector.length - 1; i++) {
    for (let j = 0; j < vector.length - i - 1; j++) {
        if (vector[j] > vector[j + 1]) {
            let aux = vector[j];
            vector[j] = vector[j + 1];
            vector[j + 1] = aux;
        }
    }
}

console.log("Vector ordenado:", vector);
