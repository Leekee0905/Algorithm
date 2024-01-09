const [F, S, G, U, D] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const bfs = (top, start, end, up, down) => {
  const visited = Array(1000001).fill(0);
  const queue = [[start, 0]];
  while (queue.length) {
    const [floor, count] = queue.shift();
    if (visited[floor]) continue;
    if (floor === end) return count;
    for (const stairs of [floor + up, floor - down]) {
      if (stairs >= 1 && stairs <= top && !visited[floor])
        queue.push([stairs, count + 1]);
    }
    visited[floor] = 1;
  }
  return 'use the stairs';
};

console.log(bfs(F, S, G, U, D));
