let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = Number(input[0])

for(let i=1; i<=count; i++){
  const str = input[i].trim().split(' ')
  console.log(str.map(e=>e.split("").reverse().join('')).join(' '))
}