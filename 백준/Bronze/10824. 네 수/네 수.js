const [A,B,C,D] = require('fs').readFileSync('/dev/stdin').toString().split(' ')
console.log(Number(A+B)+Number(C+D))