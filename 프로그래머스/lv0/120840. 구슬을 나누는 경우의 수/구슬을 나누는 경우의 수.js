function solution(balls, share) {
    let top = Array.from({length: balls}, (v,i)=>i+1).slice(-share).reduce((a,b)=>a*b)
    let btm = Array.from({length: share}, (v,i)=>i+1).reduce((a,b)=>a*b)

    return Math.floor(top/btm);
}