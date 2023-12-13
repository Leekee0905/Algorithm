const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
let array = Array.from({ length: N }, (_, i) => (i += 1));
for (let i = 1; i <= M; i++) {
  const [index, next] = input[i].split(' ').map(Number);
  const temp = array.slice(index - 1, next).reverse();
  array = [...array.slice(0, index - 1), ...temp, ...array.slice(next)];
}
console.log(array.join(' '));
