function solution(rows, columns, queries) {
    var answer = [];
    let counter = 1;
    let procession =  Array.from({ length: rows },()=>Array.from({length: columns},()=>counter++))
    queries.forEach(query=>{
        const [startX,startY,endX,endY] = query.map(e=>e-1)
        let temp = [];
        for(let i=0; i<endY-startY; i++){
            temp.push(procession[startX][startY + i])
        }
        for(let i=0; i<endX-startX; i++){
            temp.push(procession[startX + i][endY])
        }
        for(let i=0; i<endY-startY; i++){
            temp.push(procession[endX][endY - i])
        }
        for(let i=0; i<endX-startX; i++){
            temp.push(procession[endX - i][startY])
        }
        temp.unshift(temp.pop())
        answer.push(Math.min(...temp))
        for(let i=0; i<endY-startY; i++){
            procession[startX][startY + i] = temp.shift()
        }
        for(let i=0; i<endX-startX; i++){
            procession[startX + i][endY] = temp.shift()
        }
        for(let i=0; i<endY-startY; i++){
            procession[endX][endY - i] = temp.shift()
        }
        for(let i=0; i<endX-startX; i++){
            procession[endX - i][startY] = temp.shift()
        }
    })
    
    return answer;
}