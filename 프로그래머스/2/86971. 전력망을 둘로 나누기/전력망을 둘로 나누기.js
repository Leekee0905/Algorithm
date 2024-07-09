function solution(n, wires) {
    var answer = Number.MAX_SAFE_INTEGER;
    const tree = Array.from(Array(n+1),()=>[])
    wires.forEach(e=>{
        let [a,b] = e
        tree[a].push(b)
        tree[b].push(a)
    })
    
    const bfs = (root, v) => {
        const visited = Array.from(Array(n+1)).fill(0)
        const queue = [root]
        let count = 0;
        visited[root] = 1;
        while(queue.length){
            const index = queue.shift();
            tree[index].forEach(e=>{
                if(e !== v && !visited[e]){
                    visited[e] = 1;
                    queue.push(e)
                }
            })
            count++;
        }

        return count;
    }
    
    wires.forEach(ele=>{
        let [a,b] = ele;
        answer = Math.min(answer, Math.abs(bfs(a,b)-bfs(b,a)))
    })
    return answer;
}