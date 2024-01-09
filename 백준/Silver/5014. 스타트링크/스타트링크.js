const [F, S, G, U, D] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const bfs = (stair) => {
  const visited = new Array(1000001).fill(0);
  const queue = [[stair, 0]];
  while (queue.length) {
    const [floor, count] = queue.shift();
    if (visited[floor]) {
      continue;
    }
    if (floor === G) {
      return count;
    }
    for (const next of [floor + U, floor - D]) {
      if (next >= 1 && next <= F && !visited[floor]) {
        queue.push([next, count + 1]);
      }
    }
    visited[floor] = 1;
  }
  return 'use the stairs';
};

console.log(bfs(S));
