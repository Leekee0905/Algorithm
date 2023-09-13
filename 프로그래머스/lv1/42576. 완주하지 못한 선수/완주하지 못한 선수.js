function solution(participant, completion) {
    let obj = {}
    
    participant.forEach(e=>{
        if(obj[e] > 0){
            obj[e]++
        }else{
            obj[e] = 0
            obj[e] ++
        }
    })
    
    completion.forEach(e=>{
        obj[e]--
    })
    for(const key in obj){
        if(obj[key]===1)
            return key
    }
}