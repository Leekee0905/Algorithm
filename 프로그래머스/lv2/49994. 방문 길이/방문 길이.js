function solution(dirs) {
    let now = [0,0]
    let move = {
        L: [-1,0],
        R: [1,0],
        U: [0,1],
        D: [0,-1]
    }
    let route = new Set();
    
    for(let dir of dirs){
        let nx = now[0] + move[dir][0]
        let ny = now[1] + move[dir][1]

        if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
        route.add(''+now[0]+ now[1] + nx + ny)
        route.add('' + nx + ny+now[0]+ now[1])
        now = [nx, ny]
        
    }
    
    return route.size/2
}