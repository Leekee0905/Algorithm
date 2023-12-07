let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const adjArr = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N).fill(0);
let cnt = 0;

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map((e) => Number(e) - 1);
  adjArr[a].push(b);
  adjArr[b].push(a);
}

const dfs = (v) => {
  if (visited[v] === 1) {
    return;
  }
  visited[v] = 1;
  for (let i = 0; i < adjArr[v].length; i++) {
    if (visited[adjArr[v][i]] === 0) {
      dfs(adjArr[v][i]);
    }
  }
};

for (let i = 0; i < N; i++) {
  if (!visited[i]) {
    dfs(i);
    cnt++;
  }
}

console.log(cnt);
