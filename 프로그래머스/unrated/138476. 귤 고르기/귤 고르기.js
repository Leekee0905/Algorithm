function solution(k, tangerine) {
    var answer = 0;
    let sum = 0;
    const obj = {}
    tangerine.forEach((e,idx)=>{
        if(obj[e] === undefined){
            obj[e] = 1
        }else
            obj[e]++
    })
    
    const arr = Object.values(obj).sort((a,b)=>b-a)
    for(const num of arr){
        answer++;
        sum+=num
        if(sum>=k) break;
    }
    return answer;
}