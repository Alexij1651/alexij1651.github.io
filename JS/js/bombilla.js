let encendida = false;

function toggleBombilla(){

    let bombilla = document.getElementById("bombilla");
    let boton = document.getElementById("boton");

    if(encendida){
        bombilla.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        boton.textContent = "Encender";
        encendida = false;
    }else{
        bombilla.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        boton.textContent = "Apagar";
        encendida = true;
    }

}