window.onload= function(){
calc();
}

function calc(){
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    // Botón C (Limpiar todo)
    if (boton.classList.contains("limpiar")) {
      pantalla.textContent = "0";
      return;
    }

    // Botón DEL (Borrar último carácter)
    if (boton.classList.contains("borrar")) {
      if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    // Botón = (Resultado)
    if (boton.classList.contains("igual")) {
      try {
        // Reemplazamos los símbolos visuales por operadores lógicos de JS
        let expresion = pantalla.textContent
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-");

        // Calculamos el resultado
        const resultado = eval(expresion);

        // Manejo de división por cero o resultados infinitos
        if (resultado === Infinity || isNaN(resultado)) {
          pantalla.textContent = "Error!";
        } else {
          // Limitamos los decimales para que no se salga de la pantalla
          pantalla.textContent = Number(resultado.toFixed(8)).toString();
        }
      } catch {
        pantalla.textContent = "Error!";
      }
      return;
    }

    // Lógica para escribir en la pantalla
    if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});
}