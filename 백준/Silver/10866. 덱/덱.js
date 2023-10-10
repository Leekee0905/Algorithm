let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e=>e.trim())
let count = Number(input[0])

const answer = []
const deque = []
for(let i=1; i<=count; i++){
  const [cmd, item] = input[i].split(' ')

  switch(cmd){
    case 'push_front':
      deque.unshift(item)
      break;
    case 'push_back':
      deque.push(item)
      break;
    case 'pop_front':
      answer.push(deque.shift() || -1)
      break;
    case 'pop_back':
      answer.push(deque.pop() || -1)
      break;
    case 'size':
      answer.push(deque.length)
      break;
    case 'empty':
      answer.push(deque[0] ? 0 : 1)
      break;
    case 'front':
      answer.push(deque[0] || -1)
      break;
    case 'back':
      answer.push(deque[deque.length-1] || -1)
      break;
  }

}
console.log(answer.join('\n'))