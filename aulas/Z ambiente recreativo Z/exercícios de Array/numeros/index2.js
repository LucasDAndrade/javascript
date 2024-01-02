const numeros = ['1','2','3','4','5','6','7','8','9','10'];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);

  if (numeros[i] % 2 !== 0) {
    numeros.splice(i, 1);
    i--;
  }

}

console.log('Arrays sem números ímpares:', numeros);