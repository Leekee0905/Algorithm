let input = require('fs').readFileSync('/dev/stdin').toString().trim()
const croatia = ['c=','c-','dz=','d-','lj','nj','s=','z=']
let word = ''
let answer = 0;
let i = 0;
while(true){
  word += input[i];
  i++;
  if(croatia.includes(word)){
    input = input.slice(i);
    answer++;
    word = '';
    i=0;
  }else if(word.length === input.length){
    input = input.slice(1);
    word = '';
    i = 0;
    answer++;
  }

  if(input.length === 0){
    break;
  }
}

console.log(answer)