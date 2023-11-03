const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const isLowerCase = str => str===str.toLowerCase() && str!== ' '
const isUpperCase = str => str===str.toUpperCase() && str!== ' '
const isNumber = str => Number.isInteger(Number(str)) && str !== ' '
const isBlank = str => str=== ' '

let answer = ''
for(let i=0; i<input.length; i++){
  if(input[i].length === 0) continue;
  let [lower, upper, number, blank] = [0,0,0,0]
  input[i].split('').forEach(e=>{
    if(isBlank(e)){
      blank++
    }
    else if(isNumber(e)){
      if(e === '\r'){
        return;
      }
      number++
    }
    else if(isLowerCase(e)){
      lower++
    }
    else if(isUpperCase(e)){
      upper++
    }
    
  })
  answer += `${lower} ${upper} ${number} ${blank} \n`
}

console.log(answer.trim())