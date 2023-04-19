function solution(n) {
    return n.toString().split('').map(e=>parseInt(e)).reduce((a,b)=>a+b);
}