function solution(s) {
    var answer = 0;

    for(let i=0; i<s.length; i++){
        let turn = s.slice(i)+s.slice(0,i)
        let stack = [];
        for(const word of turn){
            if(word === '(' || word=== '{' || word === '[')
                stack.push(word)
            else{
                if(word === ')' && stack[stack.length-1] === '('){
                    stack.pop()
                }
                if(word === '}' && stack[stack.length-1] === '{'){
                    stack.pop()
                }
                if(word === ']' && stack[stack.length-1] === '['){
                    stack.pop()
                }
            }
        }
        if(stack.length === 0)
            answer++
    }
    return s.length%2 === 0 ? answer : 0
}