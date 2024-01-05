const pessoa = ['Lucas', 'Andrade', 21, 'Estudante']; // array


// métodos arrays:

// método join
// document.getElementById('teste').innerHTML = pessoa.join(' - '); -> substituiu a vírgula pelo conteúdo dentro dos parênteses

// pessoa.shift -> remove o primeiro elemento do array
// pessoa.pop -> remove o último elemento do array
// pessoa.unshift -> adiciona um elemento como primeiro do array
// pessoa.push -> adiciona um elemento ao final do array

// pessoa.splice ->
// pessoa.splice(1, 0, 'item adicionado 1', 'item adicionado 2');
// document.getElementById('teste').innerHTML = pessoa
// o primeiro número informa a posição do elemento, o segundo informa se algum item será excluído ou não;
// no caso acima, 0 elementos seriam excluídos, e os dois itens serão adicionados antes do elemento 1 (Andrade);



// .concat (concatenação de arrays) -> somar os elementos de 2 arrays, resultando em um composto pelos outros dois.

// const lista1 = ['arroz', 'feijão', 'macarrão', 'farofa'];
// const lista2 = ['suco', 'refrigerante', 'carne'];
// const lista3 = ['salgadinho'];

// const superLista = lista1.concat(lista2, lista3);
// document.getElementById('teste').innerHTML = superLista;


// .slice -> 'fatiar' um array, separar apenas uma parte dele.

// const jogadores = ['pelé', 'maradona', 'messi', 'cr7', 'roger guedes', 'gabriel jessus', 'neymar'];
// const craques = jogadores.slice(3, 5) // (3) - pega o conteúdo a partir da posição 3
                                        // (5) - indica onde deve parar, não incluindo o número escrito, parando um antes


// .sort -> coloca em ordem alfabética

// const jogOrdem = jogadores.sort();
// joadores.reverse -> após o .sort, deixaria o array em ordem decrescente.
// document.getElementById('teste').innerHTML = jogOrdem;

// se os elementos do meu array fossem números, e eu quisesse os colocar em ordem crescente, deveria fazer da seguinte forma:

// const numeros = [4, 10, 25, 100, 1, 50];
// numeros.sort(function (a, b) { return a - b}); // b - a ficaria ao contrário
// document.getElementById('teste').innerHTML = numeros;

// caso contrário, ficariam em ordem numeral alfabética.


// para selecionar o maior número do array, também seria necessário uma função

// document.getElementById('teste').innerHTML = maiorNumero(numeros); // chamar a função
// function maiorNumero(array) {
//   return Math.max.apply(null, array); // primeiro parâmetro um nulo, depois o valor (nome) do nosso array.
// }

// para o menor número, apenas substitua o 'max' por 'min'.


// para fazer uma filtragem, como mostrar apenas os números maiores que 20, fazer da seguinte forma.

const numeros = [4, 10, 25, 100, 1, 50];
const maior20 = numeros.filter(filtragem);

document.getElementById('teste').innerHTML = maior20;

function filtragem(value, index, array) { // valor, índice e o nosso array.
  return value > 20;
}

// faltou estudar objetos dentro de array, e até mesmo array dentro de array, mas isso fica pra depois.