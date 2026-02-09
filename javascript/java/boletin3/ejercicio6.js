console.log("\n=== EJERCICIO 6 ===");

let nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];
let nombresUnicos = new Set(nombres);

let edades = new Map();

nombresUnicos.forEach(nombre => {
  edades.set(nombre, Math.floor(Math.random() * 11) + 20);
});

// Mostrar con for...of y forEach
for (let nombre of nombresUnicos) {
  console.log(nombre);
}

edades.forEach((edad, nombre) => {
  console.log(nombre, edad);
});

// Agregar nuevos nombres
nombres.push("Pedro", "Lucía");
nombresUnicos = new Set(nombres);

nombresUnicos.forEach(nombre => {
  if (!edades.has(nombre)) {
    edades.set(nombre, Math.floor(Math.random() * 11) + 20);
  }
});

// Mostrar con for clásico
let totalEdad = 0;
let nombresArray = [...edades.keys()];

for (let i = 0; i < nombresArray.length; i++) {
  let nombre = nombresArray[i];
  let edad = edades.get(nombre);
  totalEdad += edad;
  console.log(nombre, edad);
}

console.log("Total nombres únicos:", edades.size);
console.log("Edad promedio:", totalEdad / edades.size);