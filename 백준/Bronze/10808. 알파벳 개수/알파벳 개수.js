let input = require('fs').readFileSync('/dev/stdin').toString()
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
let alpha = Array(26).fill(0)
for(let i=0; i<input.length; i++){
  alpha[alphabet.indexOf(input[i])]++
}
console.log(alpha.join(' '))