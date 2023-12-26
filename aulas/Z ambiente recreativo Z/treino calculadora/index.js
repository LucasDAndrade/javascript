let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let res = document.getElementById('res');

const botaoSoma = document.getElementById('soma')
const botaoSubt = document.getElementById('subt')
const botaoMulti = document.getElementById('multi')
const botaoDivi = document.getElementById('divi')


function realizarSoma() {

  const valorNum1 = parseFloat(num1.value);
  const valorNum2 = parseFloat(num2.value);

  if (isNaN(valorNum1) || isNaN(valorNum2))  {
    window.alert('Verifique os números e tente novamente.')
  } else {
    const resultado = valorNum1 + valorNum2;
    res.innerHTML = `Resultado: ${resultado}`
  }
}


function realizarSubtração() {

  const valorNum1 = parseFloat(num1.value);
  const valorNum2 = parseFloat(num2.value);

  if (isNaN(valorNum1) || isNaN(valorNum2)) {
    window.alert('Verifique os números e tente novamente.')
  } else {
    const resultado = valorNum1 - valorNum2;
    res.innerHTML = `Resultado: ${resultado}`
  }
}


function realizarMultiplicacao() {

  const valorNum1 = parseFloat(num1.value);
  const valorNum2 = parseFloat(num2.value);

  if (isNaN(valorNum1) || isNaN(valorNum2)) {
    window.alert('Verifique os números e tente novamente.')
  } else {
    const resultado = valorNum1 * valorNum2;
    res.innerHTML = `Resultado: ${resultado}`
  }
}


function realizarDivisao() {

  const valorNum1 = parseFloat(num1.value);
  const valorNum2 = parseFloat(num2.value);

  if (isNaN(valorNum1) || isNaN(valorNum2)) {
    window.alert('Verifique os número e tente novamente.')
  } else {
    const resultado = valorNum1 / valorNum2;
    res.innerHTML = `Resultado: ${resultado}`
  }
}