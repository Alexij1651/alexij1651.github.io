let nombre = prompt("Introduce tu nombre:");
let edad = Number(prompt("Introduce tu edad:"));
let peso = Number(prompt("Introduce tu peso (kg):"));
let estatura = Number(prompt("Introduce tu estatura (cm):"));

console.log("Nombre:", nombre);

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

if (peso < 50) {
    console.log("Es una persona delgada");
} else {
    console.log("Es una persona robusta");
}

if (estatura > 180) {
    console.log("Y es una persona alta");
} else {
    console.log("Y es una persona baja");
}
