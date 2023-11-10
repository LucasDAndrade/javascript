// recursividade

function fatorial(n) {
  if (n ==1) {
    return 1
  } else {
    return n * fatorial(n-1)
  }
}

console.log(fatorial(5))

/*
3! == 3 x 2 x 1
3! == 3 x 2!


n! = n x (n-1)!
1! = 1
*/



// dentro da função, ela tem uma chamada para ela mesma (fatorial)