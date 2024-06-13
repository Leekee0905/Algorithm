function solution(s) {
    return s.split(' ').sort((a,b)=>a-b).filter((e,idx)=>{
        if(idx===0||idx===s.split(' ').length-1)
            return e
        
    }).join(" ");
}