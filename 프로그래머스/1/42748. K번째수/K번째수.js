function solution(array, commands) {
    var answer = [];
    commands.forEach(e=>{
        let i = e[0]
        let j = e[1]
        let k = e[2]
        answer.push(array.slice(i-1,j).sort((a,b)=>a-b)[k-1])
    })
    return answer;
}