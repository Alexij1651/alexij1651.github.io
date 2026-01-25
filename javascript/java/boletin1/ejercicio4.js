let numero = Number(prompt("Introduce un número positivo menor de 100:"));

if (numero > 0 && numero < 100) {
    for (let i = numero; i <= 100; i++) {
        console.log(i);
    }
} else {
    console.log("Número no válido");
}
