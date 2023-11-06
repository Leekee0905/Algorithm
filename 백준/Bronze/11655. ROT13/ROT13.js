const input = require('fs').readFileSync('/dev/stdin').toString()

let answer = ''
for(let i=0; i<input.length; i++){
  const ascii = input[i].charCodeAt();
  let rot13 = ascii + 13
  if(input[i] === ' '){
    answer += ' ';
    continue;
  }
  if(ascii < 65 || ascii > 97 && ascii < 97 || ascii > 122){
    answer += input[i]
    continue;
  }
  
  if(rot13 > 90 && ascii <= 90){
    rot13 = 65 + rot13 - 91
  }
  if(rot13 > 122 && ascii <= 122){
    rot13 = 97 + rot13 - 123
  }
  answer += String.fromCharCode(rot13)
}

console.log(answer)