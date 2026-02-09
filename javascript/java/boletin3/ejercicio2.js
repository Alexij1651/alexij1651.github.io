console.log("\n=== EJERCICIO 2 ===");

let matriz = [
  [3, 5, 7],
  [2, 8, 10],
  [4, 6, 1]
];

// Suma total
let sumaMatriz = 0;
let totalElementos = 0;

matriz.forEach(fila => {
  fila.forEach(num => {
    sumaMatriz += num;
    totalElementos++;
  });
});

console.log("Suma matriz:", sumaMatriz);

// Promedio
let promedioMatriz = sumaMatriz / totalElementos;
console.log("Promedio matriz:", promedioMatriz);

// Máximo y mínimo
let todosLosNumeros = matriz.flat();
console.log("Máximo:", Math.max(...todosLosNumeros));
console.log("Mínimo:", Math.min(...todosLosNumeros));

// Matriz de dobles
let matrizDobles = matriz.map(fila => fila.map(num => num * 2));
console.log("Matriz dobles:", matrizDobles);

// Ordenar cada fila
let matrizOrdenada = matriz.map(fila => [...fila].sort((a, b) => a - b));
console.log("Matriz ordenada:", matrizOrdenada);
