function fatorial(n) {
  let fat = 1
  for(let c = n; c > 1; c--) {
    fat *= c
  }
  return fat
}

console.log(fatorial(5))





// calcular o fatorial de um número
// 3! == 3 x 2 x 1 == 6