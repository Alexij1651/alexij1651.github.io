let edades = new Map([
  ["Ana", 20],
  ["Juan", 17],
  ["Luis", 30],
  ["Marta", 15],
  ["Pedro", 18],
  ["Laura", 22],
  ["Sofía", 16],
  ["Carlos", 40],
  ["Elena", 14],
  ["Pablo", 19],
]);

let mayores = [];
let menores = [];

edades.forEach((edad, nombre) => {
  if (edad >= 18) {
    mayores.push(nombre);
  } else {
    menores.push(nombre);
  }
});

console.log("Mayores de edad:", mayores);
console.log("Menores de edad:", menores);
