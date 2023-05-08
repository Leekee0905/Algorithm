function solution(array) {
    let answer = 0;
    array.forEach(e=>{
        e.toString().split('').forEach(i=>{
            if(i==='7')
                answer++
        })
    })
    return answer
}