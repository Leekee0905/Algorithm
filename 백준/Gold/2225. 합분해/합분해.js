let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
let [N,K] = input.map(e=>Number(e))

const dp = [];

for(let i=1; i<=K; i++){
  dp[i] = new Array(N+1).fill(i===1 ? 1 : 0);
  dp[i][0] = 1;
}

for(let i=2; i<=K; i++){
  for(let j=1; j<=N; j++){
    dp[i][j] = dp[i-1].slice(0,j+1).reduce((acc,curr)=>acc+curr,0)%1000000000
  }
}


console.log(dp[K][N])