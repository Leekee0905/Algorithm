const solution = (n, info) => {
    let answer = [];
    let score = 0;
    const dfs = (index, remain, board) => {
        if(remain < 0) return;
        if(remain === 0){
            let rscore = 0, ascore = 0;
            for(let i=0; i<11; i++){
                if(info[i] === 0 && board[i] ===0)continue;
                const diff = info[i] - board[i]
                if(diff>=0){
                    ascore += 10-i;
                }else
                    rscore += 10-i;
            }
            const diff = rscore - ascore;
            if(score === diff){
                const aReverse = [...answer].reverse().join("");
                const bReverse = [...board].reverse().join("");
                
                if(aReverse < bReverse){
                    answer = [...board];
                }
            } else if(score < diff){
                answer = [...board];
                score = diff;
            }
                
            return;
        }
        
        for(let i=index; i<11; i++){
            const origin = board[i];
            for(let j=info[i]+1; j>=0; j--){
                board[i] = j
                dfs(i+1, remain-j, board)
            }
            board[i] = origin;
        }
    }
    
    for(let i=0; i<11; i++){
        const board = Array(11).fill(0)
        board[i] = info[i]+1
        dfs(i+1, n-board[i],board)
    }
    return score === 0 ? [-1] :  answer;
}