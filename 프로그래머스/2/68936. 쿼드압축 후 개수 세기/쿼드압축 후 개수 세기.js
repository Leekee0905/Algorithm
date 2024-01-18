function solution(arr) {
    const answer = [0,0];
    const dfs =(x,y,n) => {
        if (n === 1) return answer[arr[x][y]]++;
        
        let flag = true;
        for (let i=x; i<x+n; i++) {
            for (let j=y; j<y+n; j++) {
                if (arr[x][y] !== arr[i][j]) {
                    flag = false;
                    break;   
                }
            }
        }
        
        if (flag) return answer[arr[x][y]]++;
        
        n /= 2;
        
        dfs(x, y, n);
        dfs(x+n, y, n);
        dfs(x, y+n, n);
        dfs(x+n, y+n, n);
    }
    dfs(0,0,arr.length)
    return answer;
}