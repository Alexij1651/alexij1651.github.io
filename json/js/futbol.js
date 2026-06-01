/* ═══════════════════════════════════════════════════
   DATOS — caracteres especiales corregidos
═══════════════════════════════════════════════════ */
const equiposFutbol = [
  { nombre: "Real Madrid CF",      entrenador: "Carlo Ancelotti",   maximo_goleador_historico: "Cristiano Ronaldo",    anio_creacion: 1902 },
  { nombre: "FC Barcelona",        entrenador: "Hansi Flick",       maximo_goleador_historico: "Lionel Messi",         anio_creacion: 1899 },
  { nombre: "Manchester City FC",  entrenador: "Pep Guardiola",     maximo_goleador_historico: "Sergio Agüero",        anio_creacion: 1880 },
  { nombre: "Liverpool FC",        entrenador: "Arne Slot",         maximo_goleador_historico: "Ian Rush",             anio_creacion: 1892 },
  { nombre: "FC Bayern München",   entrenador: "Vincent Kompany",   maximo_goleador_historico: "Gerd Müller",          anio_creacion: 1900 },
  { nombre: "Juventus FC",         entrenador: "Thiago Motta",      maximo_goleador_historico: "Alessandro Del Piero", anio_creacion: 1897 },
  { nombre: "AC Milan",            entrenador: "Paulo Fonseca",     maximo_goleador_historico: "Gunnar Nordahl",       anio_creacion: 1899 },
  { nombre: "Inter de Milán",      entrenador: "Simone Inzaghi",    maximo_goleador_historico: "Giuseppe Meazza",      anio_creacion: 1908 },
  { nombre: "Paris Saint-Germain", entrenador: "Luis Enrique",      maximo_goleador_historico: "Kylian Mbappé",        anio_creacion: 1970 },
  { nombre: "Manchester United",   entrenador: "Ruben Amorim",      maximo_goleador_historico: "Wayne Rooney",         anio_creacion: 1878 },
  { nombre: "Arsenal FC",          entrenador: "Mikel Arteta",      maximo_goleador_historico: "Thierry Henry",        anio_creacion: 1886 },
  { nombre: "Boca Juniors",        entrenador: "Diego Martínez",    maximo_goleador_historico: "Martín Palermo",       anio_creacion: 1905 },
  { nombre: "River Plate",         entrenador: "Marcelo Gallardo",  maximo_goleador_historico: "Ángel Labruna",        anio_creacion: 1901 },
  { nombre: "Flamengo",            entrenador: "Tite",              maximo_goleador_historico: "Zico",                 anio_creacion: 1895 },
  { nombre: "Atlético de Madrid",  entrenador: "Diego Simeone",     maximo_goleador_historico: "Antoine Griezmann",    anio_creacion: 1903 },
  { nombre: "Borussia Dortmund",   entrenador: "Nuri Şahin",        maximo_goleador_historico: "Alfred Preissler",     anio_creacion: 1909 },
  { nombre: "Bayer Leverkusen",    entrenador: "Xabi Alonso",       maximo_goleador_historico: "Ulf Kirsten",          anio_creacion: 1904 },
  { nombre: "Chelsea FC",          entrenador: "Enzo Maresca",      maximo_goleador_historico: "Frank Lampard",        anio_creacion: 1905 },
  { nombre: "SL Benfica",          entrenador: "Bruno Lage",        maximo_goleador_historico: "Eusébio",              anio_creacion: 1904 },
  { nombre: "Ajax de Ámsterdam",   entrenador: "Francesco Farioli", maximo_goleador_historico: "Piet van Reenen",      anio_creacion: 1900 }
];
 
/* ═══════════════════════════════════════════════════
   FUNCIÓN — recorre el array y genera la tabla HTML
═══════════════════════════════════════════════════ */
function generarTabla(datos) {
 
  // 1. Seleccionamos el contenedor
  const contenedor = document.getElementById("tabla-container");
 
  // 2. Cabecera de la tabla
  let html = `<table>
    <thead>
      <tr>
        <th class="col-idx">#</th>
        <th>NOMBRE</th>
        <th>ENTRENADOR</th>
        <th>MÁX. GOLEADOR HISTÓRICO</th>
        <th>AÑO CREACIÓN</th>
      </tr>
    </thead>
    <tbody>`;
 
  // 3. Recorremos el array con forEach
  datos.forEach(function(equipo, indice) {
    html += `<tr>
      <td class="col-idx">${indice + 1}</td>
      <td class="col-nombre">${equipo.nombre}</td>
      <td>${equipo.entrenador}</td>
      <td class="col-gol">${equipo.maximo_goleador_historico}</td>
      <td class="col-anio">${equipo.anio_creacion}</td>
    </tr>`;
  });
 
  html += `</tbody></table>`;
 
  // 4. Inyectamos en el DOM
  contenedor.innerHTML = html;
 
  // 5. Contador en el hero
  document.getElementById("total").textContent = datos.length;
}
 
// Llamada inicial para ejecutar el script al cargar la página
// Esperamos a que el HTML esté completamente cargado antes de inyectar la tabla
document.addEventListener("DOMContentLoaded", function() {
  generarTabla(equiposFutbol);
});