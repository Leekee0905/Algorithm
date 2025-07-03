function solution(A,B){
    const a = A.sort((a,b)=>a-b)
    const b = B.sort((a,b)=>b-a)
    return a.map((e,i)=>e*b[i]).reduce((acc,curr)=>acc+curr);
}