let input = require('fs').readFileSync('/dev/stdin').toString()
let count = Number(input)

const dp = Array.from({length: count+1},()=>0)

for(let i=2; i<=count; i++){
  dp[i] = dp[i-1] + 1
  if(i%2 === 0){
    dp[i] = Math.min(dp[i],dp[i/2] + 1)
  }
  if(i%3 === 0){
    dp[i] = Math.min(dp[i],dp[i/3] + 1)
  }
}

console.log(dp[count])