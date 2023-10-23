let input = require('fs').readFileSync('/dev/stdin').toString()
let count = Number(input)

const dp = Array.from({length: count},()=>0)

dp[1] = 1;
dp[2] = 3;

for(let i=3; i<=count; i++){
  dp[i] = (dp[i-1] + 2 * dp[i-2]) % 10007
}

console.log(dp[count])