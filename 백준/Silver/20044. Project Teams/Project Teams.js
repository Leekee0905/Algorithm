let [group, input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
group = Number(group);
input = input
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const answer = [];
for (let i = 0; i < group; i++) {
  answer.push(input[i] + input.at(-1 - i));
}
console.log(Math.min(...answer));
