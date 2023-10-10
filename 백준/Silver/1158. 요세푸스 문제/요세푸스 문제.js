let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>Number(e))
const [N, K] = input

const arr = Array.from({length: N},(_,i)=>i+1)
const answer = []
let cnt = 1

while(arr.length){
  const shift = arr.shift()
  if(cnt % K === 0){
    answer.push(shift)
  }
  else{
    arr.push(shift)
  }
  cnt++
}

console.log(`<${answer.join(', ')}>`)