let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = Number(input[0])
const stack = [];
let answer = []

for(let i=1; i<=count; i++){
  let str = input[i].trim().split(' ')
  switch(str[0]){
    case 'push':
      stack.push(str[1])
      continue;
    case 'pop':
      answer.push(stack.pop() || -1)
      break;
    case 'empty':
      answer.push(stack[0] ? 0 : 1)
      break;
    case 'size':
      answer.push(stack.length)
      break;
    case 'top':
      answer.push(stack[stack.length-1] || -1)
      break;
    default:
      return;
  }
  
}

console.log(answer.join('\n'))