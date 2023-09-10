function solution(box, n) {
    return box.map(e=>Math.floor(e/n)).reduce((a,c)=>a*c)
}