const numeros = ['1', '2', '5', '10'];

function somaArray() {
  const numeros = [1, 2, 5, 10]; // remover as aspas simples para serem tratados como números ao invés de string
  let resultado = 0; // utilzada para acumular a soma dos elementos

  for (let i = 0; i < numeros.length; i++) { // loop para percorrer o array e adicionar cada elemento ao 'resultado'
    resultado += numeros[i];
  }

  console.log('a soma dos números é:', resultado);
}

somaArray(); // chamando a função para testar



function mediaArray() {
  const numeros = [1, 2, 5, 10];
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  const media = soma / numeros.length;
  console.log('a média dos números é:', media);
}

mediaArray();



function multiplicaArray() {
  const numeros = [1, 2 , 5, 10];
  let resultado = 0;

  for (let i = 0; i < numeros.length; i++) {
    resultado = numeros[0] * numeros[1] * numeros[2] * numeros[3];
  }

  console.log('a multiplicação dos números é:', resultado)
}

multiplicaArray();



function maiorValor() {
  const numeros = [1, 2, 5, 10];
  let maiorNumero = numeros[0]; // assumimos que, inicialmente, o primeiro número seja o maior

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }

  console.log('o maior número é:', maiorNumero);
}

maiorValor();