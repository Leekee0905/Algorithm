function solution(topping) {
    var answer = 0;
    let type = new Map()
    let bro = new Set()
    topping.forEach(e=>{
        type.has(e) ? type.set(e,type.get(e)+1) : type.set(e,1)
    })
    topping.forEach(e=>{
        let count = type.get(e) - 1
        bro.add(e)
        count === 0 ? type.delete(e) : type.set(e, count)
        if(bro.size === type.size)
            answer++
    })
    
    return answer;
}