function solution(s){
    let stack = []
    for(let i=0; i<s.length; i++){
        if(s[0]===')'){
            return false
        }
        stack.push(s[i])
        if(stack[stack.length-2] === '(' && stack[stack.length-1] === ')'){
            stack.pop()
            stack.pop()
        }
    }

    return stack.length > 0 ? false: true;
}