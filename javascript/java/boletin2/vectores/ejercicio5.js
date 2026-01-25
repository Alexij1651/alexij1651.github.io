let matriz = [];

for (let i = 0; i < 10; i++) {
  matriz[i] = [];
  for (let j = 0; j < 10; j++) {
    matriz[i][j] = i + j;
    console.log(`[${i}][${j}] => ${matriz[i][j]}`);
  }
}
