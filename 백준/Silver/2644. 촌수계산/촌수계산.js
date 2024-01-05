const [n, person, relationship, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(n);
const graph = new Array(N + 1);
const visited = new Array(N + 1).fill(0);
const [fromWho, toWho] = person.split(' ').map(Number);
let answer = 0;
let temp = 0;
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
for (let i = 0; i < Number(relationship); i++) {
  const [from, to] = input[i].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((e) => e.sort((a, b) => a - b));
const DFS = (start, depth) => {
  if (visited[start]) {
    return;
  }
  visited[start] = 1;
  if (start === toWho) {
    answer = depth;
  }

  for (let i = 0; i < graph[start].length; i++) {
    const next = graph[start][i];
    if (visited[next] === 0) {
      DFS(next, depth + 1);
    }
  }
};

DFS(fromWho, 0);
console.log(answer ? answer : -1);
