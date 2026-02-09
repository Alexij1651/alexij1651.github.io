console.log("\n=== EJERCICIO 9 ===");

let sumaNumeros = function (...nums) {
  if (nums.some(num => typeof num !== "number")) {
    return "Error: todos los parámetros deben ser números";
  }
  return nums.reduce((acc, num) => acc + num, 0);
};

console.log(sumaNumeros(1, 2, 3, 4, 5));
console.log(sumaNumeros(10, 20, 30));
console.log(sumaNumeros());