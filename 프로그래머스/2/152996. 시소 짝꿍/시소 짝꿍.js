function solution(weights) {
    var answer = 0;
    let store = {}
    const cal = [1, 3/2, 2, 4/3]
    weights.sort((a,b)=>b-a).forEach(e=>{
        cal.forEach(i=>{
            if(store[e*i])
                answer+=store[e*i]
        })
        if (!store[e]) store[e] = 1;
        else store[e]++;
    })
    return answer;
}