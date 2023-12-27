const botaoMudaCor = document.getElementById('botaoMudarCor');

botaoMudarCor.addEventListener('click', function() {
  const cores = ['red', 'green', 'blue', 'yellow', 'purple'];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)]

  document.body.style.backgroundColor = corAleatoria;
})