function solution(n, lost, reserve) {
    let answer = n-lost.length;
    
    let idonthave = lost.filter(element=>!reserve.includes(element))
    let ihave = reserve.filter(element=>!lost.includes(element))
    
    answer += lost.length-idonthave.length
    idonthave.sort((a,b)=>a-b)
    
    idonthave.forEach((element)=>{
        if(ihave.includes(element-1)){
            ihave = ihave.filter(r=>r !== element-1)
            answer++;
        }
        else if(ihave.includes(element+1)){
            ihave = ihave.filter(r=>r !== element+1);
            answer ++;
        }
    })
    return answer;
}