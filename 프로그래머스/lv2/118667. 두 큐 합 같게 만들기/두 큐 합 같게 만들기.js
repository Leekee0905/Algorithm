function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a,b)=>a+b)
    let sum2 = queue2.reduce((a,b)=>a+b)
    let half = (sum1+sum2)/2
    let queue = [...queue1,...queue2]
    let q1p = 0
    let q2p = queue1.length
    
    for(let i=0; i<queue.length*3; i++){
        if(sum1 === half)
            return i
        sum1 = sum1 > half 
            ? sum1 - queue[q1p++ %queue.length] : sum1 + queue[q2p++ %queue.length]
    }
    
    return -1;
}