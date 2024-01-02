const numeros = ['1', '2', '3', '4', '5']

numeros.push('6');

numeros.splice(2, 1);

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

/* numeros.forEach(numero => {
  console.log(numero);
}); */

console.log(numeros)