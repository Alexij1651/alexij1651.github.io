
let encendida = false;

function interBombilla(){

    let bombilla = document.getElementById("bombilla");
    let boton = document.getElementById("boton");

    if(encendida){
        bombilla.src = "";
        boton.textContent = "Encender";
        encendida = false;
    }else{
        bombilla.src = "";
        boton.textContent = "Apagar";
        encendida = true;
    }

}
