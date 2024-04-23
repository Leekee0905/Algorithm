let [N, M, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

N = Number(N);
M = Number(M);
const dist = Array.from({ length: +N + 1 }, () =>
  Array.from({ length: +N + 1 }, () => Infinity),
);
input = input.map((e) =>
  e
    .trim()
    .split(' ')
    .map((v) => +v),
);

input.forEach((e) => (dist[e[0]][e[1]] = Math.min(e[2], dist[e[0]][e[1]])));

for (let k = 1; k < N + 1; k++) {
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j] && i !== j) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    if (dist[i][j] === Infinity) {
      dist[i][j] = 0;
    }
  }
}
dist.slice(1).map((e) => console.log(e.slice(1).join(' ')));
