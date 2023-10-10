let input = require('fs').readFileSync('/dev/stdin').toString()
let count = Number(input)
let answer = []
for(let i=0; i<=count; i++){
  if(i<2){
    answer[i] = i
  }else{
    answer[i] = answer[i-1] + answer [i-2]
  }
}
console.log(answer[answer.length-1])