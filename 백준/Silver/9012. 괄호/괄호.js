let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = Number(input[0])

for(let i=1; i<=count; i++){
  let str = input[i].trim().split('')
  let cnt = 0;
  for(let j=0; j<str.length; j++){
    if(str[0] === ')'){
      cnt --
      break;
    }
    if(str[j] === '('){
      cnt ++
    }else{
      cnt--
    }

    if(cnt < 0){
      break;
    }
  }
  if(cnt === 0){
    console.log("YES")
  }else{
    console.log("NO")
  }

}