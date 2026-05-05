function actv2(){
    const numero = document.getElementById('numero').value;
    const contenedor = document.getElementById('mensaje');

    if(numero >30 || numero < 0){
        alert("Valor debe estar comprendido entre 0 o 30");
        return;
    }
    const esPar = (numero%2)===0;
    if(esPar==true){
            contenedor.innerHTML = `
        <div class="resultado-oficial">
            <h3>Resumen</h3>
            <p><strong>El valor</strong> ${numero}</p>
            <p><strong>Es par</strong></p>
        </div>
    `;    
    }else{

        contenedor.innerHTML = `
        <div class="resultado-oficial">
            <h3>Resumen</h3>
            <p><strong>El valor</strong> ${numero}</p>
            <p><strong>Es impar</strong></p>
        </div>
    `;

    }
}