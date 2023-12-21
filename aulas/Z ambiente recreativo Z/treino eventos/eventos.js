const botao = document.getElementById('botao');
const contadorParagrafo = document.getElementById('contador');

let contadorCliques = 0;

botao.addEventListener('click', () => {

  contadorCliques++
  contadorParagrafo.textContent = `Número de Cliques: ${contadorCliques}`;
})