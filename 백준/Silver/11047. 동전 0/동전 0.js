const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [N, K] = input[0].split(' ').map(Number);
const coin = input.slice(1).reverse().map(Number);
let answer = 0;
for (let i = 0; i <= N; i++) {
  if (K >= coin[i]) {
    answer += Math.floor(K / coin[i]);
    K = K % coin[i];
  }
  if(K === 0){
      break;
  }
}
console.log(answer);
