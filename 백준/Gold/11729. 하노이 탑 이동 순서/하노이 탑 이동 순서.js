const input = Number(require('fs').readFileSync('/dev/stdin').toString());
let count = 0;
const answer = [];
const hanoi = (num, from, to, sub) => {
  if (num === 0) return;
  hanoi(num - 1, from, sub, to);
  answer.push([from, to]);
  count++;
  hanoi(num - 1, sub, to, from);
  return count;
};

console.log(hanoi(input, 1, 3, 2));

console.log(answer.map((e) => e.join(' ')).join('\n'));