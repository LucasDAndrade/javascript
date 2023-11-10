let num = [3, 5, 8, 4, 9]
num.push(1) // adiciona o número indicado no fim
num.sort() // coloca em ordem crescente

console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(7)
if (pos == -1) {
  console.log(`Valor não encontrado.`)
} else {
  console.log(`O valor está na posição ${pos}`)
}