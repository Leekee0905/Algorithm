function solution(s){
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(s[i] === "(") stack.push(s[i])
        else stack.pop()
    }
    if(s[0] === ")") return false
    return stack.length > 0 ? false : true
}