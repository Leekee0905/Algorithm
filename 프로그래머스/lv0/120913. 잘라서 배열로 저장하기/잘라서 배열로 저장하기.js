function solution(my_str, n) {
    var answer = [];
    let temp = ''
    for(let i=0; i<my_str.length; i++){
        temp+=my_str[i]
        if(temp.length === n){
            answer.push(temp)
            temp = ''
        }
        if(i===my_str.length-1 && temp !== '')
            answer.push(temp)
    }
    return answer;
}