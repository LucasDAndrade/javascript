let res = document.getElementById('resultado')
res.innerHTML = 'Preencha o Formulário e Clique em Enviar'

function enviar() {
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;

  if (nome && email) {
    document.getElementById('resultado').innerHTML = `Nome: ${nome} <br> E-mail: ${email}`;
  } else {
    document.getElementById('resultado').innerHTML = 'Por favor, preencha todos os campos.';
  }
}