/**************************************************
 * MENÚ DE LA CALCULADORA
 **************************************************/
function calculadora() {
    let opcion;

    do {
        opcion = prompt(
            "CALCULADORA\n" +
            "1. Suma\n" +
            "2. Resta\n" +
            "3. Multiplicación\n" +
            "4. División\n" +
            "5. Resto (%)\n" +
            "6. Potencia (**)\n" +
            "0. Salir"
        );

        if (opcion === "0") break;

        let a = Number(prompt("Introduce el primer número"));
        let b = Number(prompt("Introduce el segundo número"));

        if (isNaN(a) || isNaN(b)) {
            alert("Error: datos incorrectos");
            continue;
        }

        let resultado;

        switch (opcion) {
            case "1":
                resultado = suma(a, b);
                break;
            case "2":
                resultado = resta(a, b);
                break;
            case "3":
                resultado = multiplicacion(a, b);
                break;
            case "4":
                resultado = division(a, b);
                break;
            case "5":
                resultado = division(a, b, true);
                break;
            case "6":
                resultado = potencia(a, b);
                break;
            default:
                alert("Opción incorrecta");
                continue;
        }

        alert("Resultado: " + resultado);

    } while (true);
}
function suma(a, b) {
    // Devuelve la suma directa
    return a + b;
}

/**************************************************
 * FUNCIÓN: resta
 * ENTRADA: a (number), b (number)
 * SALIDA: resultado de la resta
 **************************************************/
function resta(a, b) {
    // Devuelve la resta directa
    return a - b;
}

/**************************************************
 * FUNCIÓN: multiplicacion
 * ENTRADA: a (number), b (number)
 * SALIDA: resultado de la multiplicación
 **************************************************/
function multiplicacion(a, b) {
    let resultado = 0;

    // Se suma 'a' tantas veces como indique 'b'
    for (let i = 0; i < Math.abs(b); i++) {
        resultado = resultado + a;
    }

    // Ajuste de signo
    if (b < 0) {
        resultado = -resultado;
    }

    return resultado;
}

/**************************************************
 * FUNCIÓN: division
 * ENTRADA: a (number), b (number), resto (boolean)
 * SALIDA: cociente o resto
 **************************************************/
function division(a, b, resto = false) {
    if (b === 0) {
        return "Error: división por 0";
    }

    let cociente = 0;
    let signo = 1;

    // Control de signos
    if (a < 0) {
        a = -a;
        signo = -signo;
    }
    if (b < 0) {
        b = -b;
        signo = -signo;
    }

    // Restas sucesivas
    while (a >= b) {
        a = a - b;
        cociente++;
    }

    // Devuelve resto o cociente
    return resto ? a : cociente * signo;
}

/**************************************************
 * FUNCIÓN: potencia
 * ENTRADA: base (number), exponente (number)
 * SALIDA: resultado de la potencia
 **************************************************/
function potencia(base, exponente) {
    let resultado = 1;

    for (let i = 0; i < exponente; i++) {
        resultado = multiplicacion(resultado, base);
    }

    return resultado;
}
