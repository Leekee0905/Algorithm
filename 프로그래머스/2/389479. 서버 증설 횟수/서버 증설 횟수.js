function solution(players, m, k) {
    let answer = 0;
    let servers = Array(24).fill(0);
    const serverTime = [];
    players.forEach((player,idx)=>{
        if(Math.floor(player / m) > servers[idx]){
            let needServerCnt = Math.floor(player / m) - servers[idx]
            for(let i=0; i<k; i++){
                if(idx+i <= 23){
                    servers[idx+i]=servers[idx+i]+needServerCnt
                }
            }
            answer+=needServerCnt
        }
        
    })
    return answer;
}