function solution(clothes) {
    var answer = 1;
    const obj = {}
    clothes.forEach(e=>{
        const [type, name] = e
        if(obj.hasOwnProperty(name)){
            obj[name]++
        }else
            obj[name] = 1;
    })
    
    for(const key in obj){
        answer *= (obj[key] +1)
    }
    return answer-1;
}