let num1 = Number(prompt("Introduce el primer número (mayor que 0):", 1));
let num2 = Number(prompt("Introduce el segundo número (mayor que 0):", 1));

let suma = num1 + num2;

alert("La suma es: " + suma);

console.log("¿El primer valor es un número?:", !isNaN(num1));
if (suma > 20) {
    console.log("La suma es mayor que 20");
} else {
    console.log("La suma NO es mayor que 20");
}
