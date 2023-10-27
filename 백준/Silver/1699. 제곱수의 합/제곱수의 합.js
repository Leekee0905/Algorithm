let input = require('fs').readFileSync('/dev/stdin').toString()
let count = Number(input)


const dp = Array.from({length: count+1},(_,i)=>i++)

for(let i=1; i<count+1; i++){
  for(let j=1; j * j <= i; j++){
    dp[i] = Math.min(dp[i],dp[i-j*j]+1)
  }
}
console.log(dp[count])