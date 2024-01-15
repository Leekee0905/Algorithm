let input =
  1000 - Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const coin = [500, 100, 50, 10, 5, 1];
let answer = 0;
coin.forEach((e) => {
  if (input >= 0) {
    answer += Math.floor(input / e);
    input = input % e;
  }
});

console.log(answer);
