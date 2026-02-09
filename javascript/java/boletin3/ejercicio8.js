console.log("\n=== EJERCICIO 8 ===");

let calcularArea = function (base = 1, altura = 1) {
  if (typeof base !== "number" || typeof altura !== "number") {
    return "Error: base y altura deben ser números";
  }
  return base * altura;
};

console.log(calcularArea());
console.log(calcularArea(5));
console.log(calcularArea(5, 3));
