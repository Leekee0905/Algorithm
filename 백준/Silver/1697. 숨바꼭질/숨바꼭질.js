const [N, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const visited = new Array(K + 1).fill(0);
const bfs = (location) => {
  const queue = [];
  queue.push([location, 0]);
  visited[N] = 1;
  while (queue.length > 0) {
    const [curr, time] = queue.shift();
    if (curr === K) {
      return time;
    }

    for (next of [curr - 1, curr + 1, curr * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        visited[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
};

console.log(bfs(N));