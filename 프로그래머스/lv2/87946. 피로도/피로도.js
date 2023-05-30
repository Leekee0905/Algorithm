function solution(k, dungeons) {
    let answer = 0;
    let visited = Array(dungeons.length).fill(false);
    let temp = 0;
    
    const dfs = (cnt, currentFatigue) => {
        for(let i=0; i<dungeons.length; i++){
            if(!visited[i] && currentFatigue >= dungeons[i][0]){
                visited[i] = true
                dfs(cnt+1, currentFatigue-dungeons[i][1])
                visited[i] = false
            }
        }
        answer = Math.max(answer, cnt)
    }
    dfs(0,k)
    
    return answer;
}