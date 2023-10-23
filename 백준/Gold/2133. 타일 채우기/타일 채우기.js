let input = require('fs').readFileSync('/dev/stdin').toString()
let count = Number(input)
if(count % 2 !== 0){
  return console.log(0)
}

const dp = Array.from({length: count},()=>0)

dp[0] = 0;
dp[2] = 3;


for(let i=4; i<=count; i+=2){
  dp[i] =  3 * dp[i-2] + 2;

  for(let j=4; j<i; j+=2){
    dp[i] += dp[i-j] * 2;
  }
}

console.log(dp[count]);