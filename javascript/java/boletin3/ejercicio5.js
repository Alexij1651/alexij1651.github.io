console.log("\n=== EJERCICIO 5 ===");

let frutas = ["manzana", "banana", "naranja"];
console.log("Original:", frutas);

frutas.push("kiwi");
console.log("Con kiwi:", frutas);

frutas.unshift("fresa");
console.log("Con fresa:", frutas);

frutas.pop();
console.log("Sin último:", frutas);

frutas.shift();
console.log("Sin primero:", frutas);

frutas.splice(2, 0, "mango");
console.log("Con mango:", frutas);

// Copia
let frutasCopia = [...frutas];
frutasCopia.push("piña");
frutasCopia.shift();

console.log("Original:", frutas);
console.log("Copia modificada:", frutasCopia);