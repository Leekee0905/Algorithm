let input = require('fs').readFileSync('/dev/stdin').toString()
let count = Number(input)
const dp = [0,1]
for(let i=1; i<count; i++){
  dp[i+1] = BigInt(dp[i]) + BigInt(dp[i-1])
}

console.log(dp[count].toString())