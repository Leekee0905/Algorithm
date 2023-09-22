let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = Number(input[0])

let inputStack = []
let stack = []
let answer = ''
let idx = 1

for(let i=1 ; i<=count; i++){
  let item = input[i].trim()
  inputStack.push(Number(item))
}

for(let i=0; i<count; i++){

  const number = inputStack.shift()

  while(idx <= number){
    stack.push(idx++)
    answer+= '+'
  }

  const poped = stack.pop()
  if(poped !== number){
    return console.log("NO")
  }
  answer+='-'
}

console.log(answer.split('').join('\n'))
