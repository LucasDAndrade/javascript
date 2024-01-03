const carro = {marca: 'ford', 
modelo: 'ka', 
ano: 2015, 
placa: 'abc-1234',
buzina: function() {alert('biiiii')},
completo: function() {
  return 'A marca do carro é '+this.marca+', e o modelo é '+this.modelo;
}

};

console.log(carro.completo());

function eventoClick() {
  document.body.style.backgroundColor = 'yellow';
}

function duploClique() {
  alert('dblclick bem sucedido')
}

function viraVermelho() {
  let div = document.getElementById('teste');
  div.style.backgroundColor = 'red';
}

function viraAzul() {
  let div = document.getElementById('teste');
  div.style.backgroundColor = 'blue';
}

/*
function adicione() {
  let p = document.getElementById('texto');
  p.append('o mouse moveu ')
}
*/ 

// elementos to tipo input \/\/\/

function limpaTexto() {
  document.getElementById('campoTexto').value = '';
}

function mudou() {
  console.log('mudou');
}

function teclaPressionada() {
  let input = document.getElementById('campoTexto').value;
  console.log(input);
}


// arrays

/* 
  primeiramente, vamos direfenciar um array de um objeto

  const pessoa = ['Lucas', 'Andrade', 21]; --> array (ou matriz, utilizado quando se precisa de algo mais elaborado que o objeto)
  const pessoa = {nome: 'Lucas', sobrenome: 'Andrade', idade: 21}; --> objeto (utilizado para coisas mais simples)

  no caso do objeto: pessoa.nome; para retornar o nome
  no caso do array: pessoa[0]; para retornar o nome

  alert('pessoa.length') resultaria no número 3
  alert(pessoa[pessoa.length - 1]); para mostrar o número total de elementos no array (ele mostraria o número total, -1 porque se inicia em 0)
  pessoa.push('estudante');

  alert(Array.isArray(pessoa)); responderá true ou false, confirmando se é um array ou não
*/



const lista = ['arroz', 'feijão', 'macarrão', 'leite'];
lista[0] = 'café'

console.log('lista')

