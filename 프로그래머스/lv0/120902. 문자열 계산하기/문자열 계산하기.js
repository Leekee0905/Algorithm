function solution(my_string) {
    let answer = 0;
    let operator = '+'
    my_string.split(' ').forEach((e,idx)=>{
        if(!!parseInt(e)){
            operator === '+' ? answer += parseInt(e) : answer -= parseInt(e)
        }else
            operator = e
        
    })
    return answer
}