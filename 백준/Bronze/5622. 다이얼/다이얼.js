const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const dial = {ABC:3,DEF:4,GHI:5,JKL:6,MNO:7,PQRS:8,TUV:9,WXYZ:10}
let answer = 0;
for(let i=0; i<input.length; i++){
  const findKey = Object.keys(dial).find(e=>e.includes(input[i]))
  answer += dial[findKey]
}
console.log(answer)