function solution(score) {
    let avg = score.map((e)=>(e[0]+e[1])/2)
    let sorted = avg.slice().sort((a,b)=>b-a)
    return avg.map(e=>sorted.indexOf(e)+1);
}