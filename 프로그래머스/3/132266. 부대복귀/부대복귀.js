function solution(n, roads, sources, destination) {
    const graph = Array.from({length: n+1}, ()=>[])
    for(const [a,b] of roads){
        graph[a].push(b)
        graph[b].push(a)
    }
    
    const distances = Array(n+1).fill(-1)
    distances[destination] = 0;
    const queue = [destination]
    while(queue.length>0){
        const current = queue.shift();
        for(const next of graph[current]){
            if(distances[next] === -1){
                distances[next] = distances[current] + 1;
                queue.push(next)
            }
        }
    }

    return sources.map(source=>distances[source])
}