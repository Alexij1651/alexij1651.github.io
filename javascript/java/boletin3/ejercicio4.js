console.log("\n=== EJERCICIO 4 ===");

let estudiantes = new Map([
  ["Ana", 85],
  ["Luis", 92],
  ["María", 76],
  ["Carlos", 88],
  ["Sofía", 95]
]);

// Agregar estudiante
estudiantes.set("Pedro", 90);
console.log("Mapa actualizado:", estudiantes);

// Promedio
let sumaNotas = 0;
estudiantes.forEach(nota => sumaNotas += nota);
console.log("Promedio:", sumaNotas / estudiantes.size);

// Máximo y mínimo
let maxEst, minEst;
let maxNota = -Infinity;
let minNota = Infinity;

estudiantes.forEach((nota, nombre) => {
  if (nota > maxNota) {
    maxNota = nota;
    maxEst = nombre;
  }
  if (nota < minNota) {
    minNota = nota;
    minEst = nombre;
  }
});

console.log("Mejor estudiante:", maxEst);
console.log("Peor estudiante:", minEst);

// Aprobados
let aprobados = new Map(
  [...estudiantes].filter(([_, nota]) => nota >= 80)
);
console.log("Aprobados:", aprobados);

// Ordenar por nota descendente
let estudiantesOrdenados = new Map(
  [...estudiantes].sort((a, b) => b[1] - a[1])
);
console.log("Ordenados por nota:", estudiantesOrdenados);