let personas = new Map();

// 7.1 Agregar cuatro personas
personas.set("12345678A", "Ana López");
personas.set("87654321B", "Juan Pérez");
personas.set("11223344C", "María Gómez");
personas.set("44332211D", "Luis Torres");

// 7.2 Pedir DNI
let dni = prompt("Introduce el DNI a buscar:");

// 7.3 y 7.4 Mostrar resultado
if (personas.has(dni)) {
  alert("Nombre: " + personas.get(dni));
} else {
  alert("❌ DNI no encontrado");
}
