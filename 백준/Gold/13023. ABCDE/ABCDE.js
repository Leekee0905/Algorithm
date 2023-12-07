let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
const adjArr = Array.from({ length: N }, () => Array(0));
const visited = new Array(N).fill(0);
let flag = false;

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map((v) => +v);
  adjArr[a].push(b);
  adjArr[b].push(a);
}

const dfs = (L, cnt) => {
  if (flag) {
    return;
  }
  visited[L] = 1;
  if (cnt === 4) {
    flag = true;
    return;
  }

  for (let i = 0; i < adjArr[L].length; i++) {
    const next = adjArr[L][i];
    if (!visited[next]) {
      dfs(next, cnt + 1);
    }
  }
  visited[L] = 0;
};

for (let i = 0; i < N; i++) {
  dfs(i, 0);
}
flag ? console.log('1') : console.log('0');
