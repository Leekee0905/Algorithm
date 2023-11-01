const [A,B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(e=>e.split('').reverse().join(''))

console.log(Math.max(A,B))