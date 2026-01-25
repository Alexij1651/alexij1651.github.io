const FILAS = 20;
const COLUMNAS = 20;

// Posición del tesoro
let tesoroX = Math.floor(Math.random() * FILAS);
let tesoroY = Math.floor(Math.random() * COLUMNAS);

let intentos = 5;
let encontrado = false;

while (intentos > 0 && !encontrado) {
  let x = parseInt(prompt("Introduce fila (0-19):"));
  let y = parseInt(prompt("Introduce columna (0-19):"));

  if (x === tesoroX && y === tesoroY) {
    alert("🎉 ¡Has encontrado el tesoro!");
    encontrado = true;
  } else {
    let pista = "";

    if (x < tesoroX) pista += "sur ";
    if (x > tesoroX) pista += "norte ";
    if (y < tesoroY) pista += "este ";
    if (y > tesoroY) pista += "oeste ";

    alert("❌ No está ahí. Pista: " + pista);
    intentos--;
  }
}

if (!encontrado) {
  alert(`💀 Has perdido. El tesoro estaba en [${tesoroX}][${tesoroY}]`);
}
