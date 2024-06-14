function solution(k, tangerine) {
    var answer = 0;
    let sum = 0;
    const obj = {}
    tangerine.forEach((e,idx)=>{
        if (obj.hasOwnProperty(e)) {
            obj[e]++;
        } else {
            obj[e] = 1;
        }
    })
    
    const arr = Object.values(obj).sort((a,b)=>b-a)
    for(const num of arr){
        answer++;
        sum+=num
        if(sum>=k) break;
    }
    return answer;
}