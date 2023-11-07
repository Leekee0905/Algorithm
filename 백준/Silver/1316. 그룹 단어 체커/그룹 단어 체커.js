const [count, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let countGroup = 0;

for(let i=0; i<count; i++){
  const word = input[i];
  const letter = [];
  let isGroup = true;

  for(let j=0; j<word.length; j++){
    if(letter.indexOf(word[j]) === -1){
      letter.push(word[j])
    }else if(letter.indexOf(word[j])!==letter.length-1){
      isGroup = false;
      break;
    }
  }

  if(isGroup){
    countGroup++
  }
}

console.log(countGroup)