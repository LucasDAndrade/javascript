let titulo = document.getElementById('titulo')
titulo.innerHTML = 'Novo Titulo da Página';

let paragrafo = document.querySelector('p.paragrafo'); // . -> class, # -> id
paragrafo.innerHTML = 'Este é um novo parágrafo';

const segundoItem = document.getElementById('item2');
segundoItem.classList.add('highlight');

const botao = document.getElementById('botao')
botao.addEventListener('click', function() {
  alert('Botão clicado!');
});