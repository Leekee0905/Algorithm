const input = require('fs').readFileSync('/dev/stdin').toString().split('').map(e=>e.toUpperCase())

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const arr = Array(26).fill(0)
for(let i=0; i<input.length; i++){
  arr[alpha.indexOf(input[i])]++
}

const flag = arr.filter(e=>e === Math.max(...arr)).length > 1
console.log(flag ? '?' : alpha[arr.indexOf(Math.max(...arr))])