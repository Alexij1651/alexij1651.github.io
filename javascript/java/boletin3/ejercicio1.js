console.log("=== EJERCICIO 1 ===");

let numeros = [3, 5, 7, 2, 8, 10, 4, 6, 1, 9];

// Suma
let suma = numeros.reduce((acc, num) => acc + num, 0);
console.log("Suma:", suma);

// Promedio
let promedio = suma / numeros.length;
console.log("Promedio:", promedio);

// Máximo y mínimo
let max = Math.max(...numeros);
let min = Math.min(...numeros);
console.log("Máximo:", max);
console.log("Mínimo:", min);

// Array con dobles
let numerosDobles = numeros.map(num => num * 2);
console.log("Números dobles:", numerosDobles);

// Ordenar de menor a mayor
let numerosOrdenados = [...numeros].sort((a, b) => a - b);
console.log("Ordenados:", numerosOrdenados);