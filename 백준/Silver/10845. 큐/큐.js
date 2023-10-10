let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e=>e.trim())
let count = Number(input[0])

let queue = []
let answer = []
for(let i=1; i<count+1; i++){
  const [cmd, item] = input[i].split(' ')
  switch(cmd){
    case 'push':
      queue.push(item)
      break;
    case 'pop':
      answer.push(queue.shift()||-1)
      break;
    case 'size':
      answer.push(queue.length)
      break;
    case 'front':
      answer.push(queue[0] || -1)
      break;
    case 'back':
      answer.push(queue[queue.length-1] || -1)
      break;
    case 'empty':
      answer.push(queue[0] ? 0 : 1)
      break;
    default:
      break;
  }

}

console.log(answer.join('\n'))
