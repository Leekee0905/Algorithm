function solution(s) {
    var answer = '';
    s.split(' ').sort((a,b)=>a-b).map((e,idx)=>{
        if(idx === 0 || s.split(' ').length-1 === idx ){
            answer+=e
            answer+=' '
        }
        
    })
    return answer.trim();
}