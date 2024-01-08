function somaDosPares(n) {
  let soma = 0
}

for (let i = 2; i <= n * 2; i += 2) {
    soma += i;
}

return soma;

// exemplo de uso
const resultado = somaDosPares(5)
console.log(resultado);