window.onload = function(){
  actividad6();
}

function actividad1(){
const act1 = document.getElementById("Act1");
act1.innerText="DOM manipulado";
act1.style.color="red";
act1.classList.add("titulo-activo");
}

function actividad2(){
  const act2 = document.getElementById("Act2");
act2.innerHTML= "<strong>Esto es un parrafo</strong>";
}

function actividad3(){
  const act3 = document.querySelectorAll("td");
  act3[0].textContent= "Nueva Celda";
  act3[1].textContent= "Celda duplicada";
}

function actividad4(){
  const act4 = document.querySelector("tr")
  const nueCeld = document.createElement("td");
  nueCeld.textContent= "soy Nueva";
  act4.appendChild(nueCeld);
}

function actividad5(){
   const act5 = document.querySelectorAll("td");
   //(Celda completa)style.backgroundColor="color";
  act5[0].style.color= "green";
  act5[1].style.color= "red";
}
function cambiaColor(event) {
  event.target.style.backgroundColor = "yellow";
}

function actividad6(){
  const act6 = document.querySelectorAll("td");
act6.forEach(celda => { celda.addEventListener("click",cambiaColor);})
}