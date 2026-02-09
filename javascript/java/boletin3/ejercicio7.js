console.log("\n=== EJERCICIO 7 ===");

const sumaYComparar = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return { error: "Ambos parámetros deben ser números" };
  }

  let mensaje =
    num1 > num2 ? "num1 es mayor" :
    num1 < num2 ? "num1 es menor" :
    "Ambos números son iguales";

  return {
    suma: num1 + num2,
    mensaje
  };
};

console.log(sumaYComparar(5, 3));