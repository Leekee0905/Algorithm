function solution(sequence) {
    let answer = -Infinity
    const len = sequence.length
    
    const pulsed = Array.from({length: len},()=>Array.from({length:2},()=>[0,0]))
    const acc = Array.from({length: len},()=>Array.from({length:2},()=>[0,0]))
    
    pulsed[0][0] = sequence[0]
    pulsed[0][1] = -sequence[0]
    
    acc[0][0] = pulsed[0][0]
    acc[0][1] = pulsed[0][1]
    answer = Math.max(answer, acc[0][0], acc[0][1])
    for(let i=1; i<len;i++){
        const sign = i%2===0 ? 1 : -1
        
        pulsed[i][0] = sign * sequence[i]
        pulsed[i][1] = -1 * sign * sequence[i]
        
        acc[i][0] = Math.max(acc[i-1][0] + pulsed[i][0], pulsed[i][0]);
        acc[i][1] = Math.max(acc[i-1][1] + pulsed[i][1], pulsed[i][1]);

        answer = Math.max(answer, acc[i][0], acc[i][1]);
    }
    return answer;
}