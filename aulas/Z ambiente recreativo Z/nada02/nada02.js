var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

var tentativas = 0

function verificarPalpite() {
  var palpite = parseInt(document.getElementById("palpite").value);

  tentativas++

  if(palpite == numeroAleatorio) {
    window.alert(`Parabéns, você acertou o número em ${tentativas} tentativas!`)
  } else if(palpite < numeroAleatorio) {
    window.alert('Tente um número maior.')
  } else {
    window.alert('Tente um número menor.')
  }
}