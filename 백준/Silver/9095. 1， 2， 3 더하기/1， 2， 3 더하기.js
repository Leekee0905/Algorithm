let [K,...N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e=>Number(e.trim()))


const dp = [1,2,4]
for(let i=3; i<11; i++){
  dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
}

for(let i=0; i<K; i++){
  console.log(dp[N[i]-1])
}