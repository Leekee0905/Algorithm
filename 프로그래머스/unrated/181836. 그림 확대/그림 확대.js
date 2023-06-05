function solution(picture, k) {
    var answer = [];
    picture.forEach(e=>{
        let temp = ''
        e.split('').forEach(i=>{
            temp+=i.repeat(k)
        })
        for(let i=0; i<k; i++){
            answer.push(temp)
        }
    })
    return answer;
}