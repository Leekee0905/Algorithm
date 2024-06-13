function solution(players, callings) {
    let map1 = {};
    players.map((e,idx)=>map1[e] = idx)

    for(let i=0; i<callings.length; i++){
        const overtaker = callings[i]
        const overtakerIdx = map1[overtaker]
        const caught = players[overtakerIdx-1]
        
        players[overtakerIdx - 1] = overtaker
        players[overtakerIdx] = caught
        
        map1[overtaker] = overtakerIdx - 1
        map1[caught] = overtakerIdx
        
    }
    
    return players;
}