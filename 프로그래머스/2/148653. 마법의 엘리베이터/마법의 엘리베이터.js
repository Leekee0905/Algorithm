function solution(storey) {
    let answer = Number.MAX_SAFE_INTEGER
    const dfs = (number, cnt) => {
        if(cnt >= answer) return;
        if(number === 0){
            answer = cnt;
        }
        else{
            let res = number % 10;
            dfs(Math.floor(number / 10), cnt+res)
            dfs(Math.floor(number / 10)+1, cnt+10-res)
        }
    }
    dfs(storey,0)
    return answer
}