let n1 = Number(prompt("Introduce el primer número:"));
let n2 = Number(prompt("Introduce el segundo número:"));

let quiereSumar = confirm("¿Quieres sumarlos?");

if (quiereSumar) {
    alert("La suma es: " + (n1 + n2));
}
