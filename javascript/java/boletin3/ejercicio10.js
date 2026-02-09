console.log("\n=== EJERCICIO 10 ===");

let numeros10 = [1,2,3,4,5,6,7,8,9,10];

function filtrarYTransformar(array, callbackFiltro, callbackTransformar) {
  if (typeof callbackFiltro !== "function" || typeof callbackTransformar !== "function") {
    return "Error: los callbacks deben ser funciones";
  }

  return array
    .filter(callbackFiltro)
    .map(callbackTransformar);
}

let paresDobles = filtrarYTransformar(
  numeros10,
  num => num % 2 === 0,
  num => num * 2
);

let imparesCuadrado = filtrarYTransformar(
  numeros10,
  num => num % 2 !== 0,
  num => num ** 2
);

console.log("Pares x2:", paresDobles);
console.log("Impares²:", imparesCuadrado);