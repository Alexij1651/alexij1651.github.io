console.log("\n=== EJERCICIO 3 ===");

let conjuntoA = new Set([1, 2, 3, 4, 5]);
let conjuntoB = new Set([4, 5, 6, 7, 8]);

// Unión
let union = new Set([...conjuntoA, ...conjuntoB]);
console.log("Unión:", [...union]);

// Intersección
let interseccion = new Set([...conjuntoA].filter(num => conjuntoB.has(num)));
console.log("Intersección:", [...interseccion]);

// Diferencia A - B
let diferencia = new Set([...conjuntoA].filter(num => !conjuntoB.has(num)));
console.log("Diferencia A-B:", [...diferencia]);

// Comprobaciones
console.log("¿3 está en A?", conjuntoA.has(3));
console.log("¿8 está en B?", conjuntoB.has(8));

// Conjunto ordenado
let conjuntoOrdenado = [...union].sort((a, b) => a - b);
console.log("Conjunto ordenado:", conjuntoOrdenado);