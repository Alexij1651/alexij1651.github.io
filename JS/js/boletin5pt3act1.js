function actv1(){
    const n1 = document.getElementById("mensaje")
    
    if(document.getElementById("edad")>18){
        n1.innerHTML = " () tiene n años y es mayor de Edad"
    }else{
      n1.innerHTML = " () tiene n años y es menor de Edad"  
    }
    
}