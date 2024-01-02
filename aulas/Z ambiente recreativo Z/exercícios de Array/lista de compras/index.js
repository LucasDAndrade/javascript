const listaDeCompras = ['maçã', 'banana', 'leite', 'pão', 'queijo']

listaDeCompras.push('presunto', 'ovos');

listaDeCompras.splice(2, 1);

// listaDeCompras = listaDeCompras.filter(item => item !== 'leite');

console.log(listaDeCompras)