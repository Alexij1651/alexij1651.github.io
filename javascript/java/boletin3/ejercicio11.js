console.log("\n=== EJERCICIO 11 ===");

const gestorTareas = (function () {
  let tareas = ["Limpiar la casa", "Hacer la compra", "Estudiar JavaScript"];

  function agregarTareas(...nuevasTareas) {
    nuevasTareas.forEach(tarea => {
      if (typeof tarea === "string" && tarea.trim() !== "") {
        tareas.push(tarea);
      }
    });
  }

  function mostrarTareas() {
    tareas.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea}`);
    });
  }

  agregarTareas("Hacer ejercicio", "Leer un libro");
  mostrarTareas();
})();