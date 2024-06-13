function solution(s) {
    var answer = '';
    const regex = /^[a-z|A-Z]/
    let string = s.toLowerCase().split(' ')

    for(const i of string){
        if(!regex.test(i[0])){
           answer += i
           answer += ' '
        }
        else {
            i.split('').map((e,idx)=>{
                if(idx===0){
                    answer += e.toUpperCase()
                }
                else {
                    answer += e
                }
            })
            answer += ' '
        }
    }
    if(s[s.length-1] === " "){
        return answer.slice(0,answer.length-1)
    }
    return answer.trim()
}