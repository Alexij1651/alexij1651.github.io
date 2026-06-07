/* ════════════════════════════════════════════════════
   DATOS COMPARTIDOS ENTRE ACTIVIDADES 5 Y 6
════════════════════════════════════════════════════ */
const personasIniciales = [
  { nombre: "Ana",   edad: 30 },
  { nombre: "Pedro", edad: 40 },
  { nombre: "Lucia", edad: 25 }
];
 
let personas5 = [...personasIniciales];
let personas6 = [...personasIniciales];
 
/* ── AGENDA (Actividad 7) ──────────────────────── */
const agenda = [
  { nombre:"Ana",      apellido1:"García",    apellido2:"López",    direccion:"Calle Mayor 1, Madrid",       telefono:"611 111 111" },
  { nombre:"Pedro",    apellido1:"Martínez",  apellido2:"Ruiz",     direccion:"Av. Libertad 23, Barcelona",  telefono:"622 222 222" },
  { nombre:"Lucía",    apellido1:"Fernández", apellido2:"Sanz",     direccion:"C/ Rosal 8, Valencia",        telefono:"633 333 333" },
  { nombre:"Antonio",  apellido1:"Torres",    apellido2:"Vega",     direccion:"Plaza España 5, Sevilla",     telefono:"644 444 444" },
  { nombre:"Carmen",   apellido1:"Jiménez",   apellido2:"Mora",     direccion:"C/ Olivo 12, Málaga",         telefono:"655 555 555" },
  { nombre:"Juan",     apellido1:"Romero",    apellido2:"Díaz",     direccion:"Av. Mar 3, Alicante",         telefono:"666 666 666" },
  { nombre:"María",    apellido1:"Álvarez",   apellido2:"Gil",      direccion:"C/ Cedro 7, Zaragoza",        telefono:"677 777 777" },
  { nombre:"Carlos",   apellido1:"Sánchez",   apellido2:"Reyes",    direccion:"Paseo Prado 19, Madrid",      telefono:"688 888 888" },
  { nombre:"Elena",    apellido1:"Ramírez",   apellido2:"Castro",   direccion:"C/ Luna 4, Bilbao",           telefono:"699 999 999" },
  { nombre:"Roberto",  apellido1:"López",     apellido2:"Herrero",  direccion:"Gran Vía 88, Granada",        telefono:"600 000 000" }
];
 
/* ════════════════════════════════════════════════════
   ACTIVIDAD 1
════════════════════════════════════════════════════ */
function act1() {
  // Válido
  const texto = '{"nombre":"Ana","edad":30}';
  try {
    const obj = JSON.parse(texto);
    document.getElementById('out1').textContent = `nombre → "${obj.nombre}"`;
  } catch(e) {
    document.getElementById('out1').textContent = 'Error: ' + e.message;
  }
 
  // Inválido
  const malo = "{ nombre: 'Ana' }";
  try {
    JSON.parse(malo);
  } catch(e) {
    document.getElementById('out1b').textContent = 'SyntaxError: ' + e.message;
  }
}
 
/* ════════════════════════════════════════════════════
   ACTIVIDAD 2
════════════════════════════════════════════════════ */
function act2() {
  const usuario = { nombre: "Pedro", edad: 40 };
  const json = JSON.stringify(usuario, null, 2);
  document.getElementById('out2').textContent = json;
}
 
/* ════════════════════════════════════════════════════
   ACTIVIDAD 3
════════════════════════════════════════════════════ */
function act3() {
  const bien = '{"nombre": "Ana"}';
  try {
    const obj = JSON.parse(bien);
    document.getElementById('out3').textContent =
      `✅ Parseado correctamente → nombre: "${obj.nombre}"`;
  } catch(e) {
    document.getElementById('out3').textContent = 'Error: ' + e.message;
  }
}
 
/* ════════════════════════════════════════════════════
   ACTIVIDAD 4
════════════════════════════════════════════════════ */
function act4() {
  const personasJSON = `[
    {"nombre":"Ana","edad":30},
    {"nombre":"Pedro","edad":40},
    {"nombre":"Lucia","edad":25}
  ]`;
  const ps = JSON.parse(personasJSON);
  const mayores = ps.filter(p => p.edad > 30);
  const media = ps.reduce((s,p) => s + p.edad, 0) / ps.length;
 
  document.getElementById('out4a').textContent =
    mayores.map(p => `${p.nombre} (${p.edad} años)`).join('\n');
  document.getElementById('out4b').textContent =
    `Media de edad: ${media.toFixed(2)} años`;
}
 
/* ════════════════════════════════════════════════════
   ACTIVIDAD 5
════════════════════════════════════════════════════ */
function act5() {
  const nombre = document.getElementById('inp5nombre').value.trim();
  const edad   = parseInt(document.getElementById('inp5edad').value);
 
  if (!nombre || isNaN(edad)) {
    alert('⚠️ Introduce nombre y edad válidos.');
    return;
  }
 
  personas5.push({ nombre, edad });
  document.getElementById('inp5nombre').value = '';
  document.getElementById('inp5edad').value   = '';
 
  const out = document.getElementById('out5');
  out.textContent = JSON.stringify(personas5, null, 2);
 
  const cnt = document.getElementById('count5');
  cnt.innerHTML = `<span class="count-badge">👥 ${personas5.length} personas en el array</span>`;
}
 
/* ════════════════════════════════════════════════════
   ACTIVIDAD 6
════════════════════════════════════════════════════ */
function act6add() {
  const nombre = document.getElementById('inp6nombre').value.trim();
  const edad   = parseInt(document.getElementById('inp6edad').value);
  if (!nombre || isNaN(edad)) { alert('⚠️ Introduce nombre y edad válidos.'); return; }
 
  personas6.push({ nombre, edad });
  document.getElementById('inp6nombre').value = '';
  document.getElementById('inp6edad').value   = '';
  act6render();
}
 
function act6render() {
  const wrap = document.getElementById('tabla6wrap');
  if (personas6.length === 0) { wrap.innerHTML = ''; return; }
 
  let html = `
  <div class="table-wrap" style="margin-top:.5rem;">
    <table>
      <thead>
        <tr>
          <th style="background:#2d3a6b;color:#c7d4ff;">Nombre</th>
          <th style="background:#2d3a6b;color:#c7d4ff;">Edad</th>
        </tr>
      </thead>
      <tbody>`;
 
  personas6.forEach((p, i) => {
    const bg = i % 2 === 0 ? '#141b30' : '#1a2340';
    html += `<tr>
      <td style="background:${bg}">${escHtml(p.nombre)}</td>
      <td style="background:${bg}">${p.edad}</td>
    </tr>`;
  });
 
  html += `</tbody></table></div>`;
  wrap.innerHTML = html;
}
 
/* ════════════════════════════════════════════════════
   ACTIVIDAD 7
════════════════════════════════════════════════════ */
function renderAgenda() {
  const campos = ['nombre','apellido1','apellido2','direccion','telefono'];
  const labels = ['Nombre','Apellido 1','Apellido 2','Dirección','Teléfono'];
 
  let html = `
  <div class="table-wrap">
    <table>
      <thead>
        <tr>${labels.map(l=>`<th class="agenda-th">${l}</th>`).join('')}</tr>
      </thead>
      <tbody>`;
 
  agenda.forEach((p, i) => {
    const cls = i % 2 === 0 ? 'agenda-even' : 'agenda-odd';
    html += `<tr>${campos.map(c=>`<td class="${cls}">${escHtml(p[c])}</td>`).join('')}</tr>`;
  });
 
  html += `</tbody></table></div>`;
  document.getElementById('tabla7wrap').innerHTML = html;
}
 
function descargarJSON() {
  const blob = new Blob([JSON.stringify(agenda, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'agenda.json';
  a.click();
}
 
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}
 
/* ════════════════════════════════════════════════════
   INIT — ejecutar todo al cargar
════════════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  act1();
  act2();
  act3();
  act4();
  // Actividad 5: mostrar array inicial
  document.getElementById('out5').textContent = JSON.stringify(personas5, null, 2);
  document.getElementById('count5').innerHTML =
    `<span class="count-badge">👥 ${personas5.length} personas en el array</span>`;
  // Actividad 6: tabla inicial
  act6render();
  // Actividad 7: tabla agenda
  renderAgenda();
});
