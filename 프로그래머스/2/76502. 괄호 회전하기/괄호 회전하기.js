function solution(s) {
    let answer = 0;
    const parentheses = {"(": ")","{":"}","[":"]"}
    const newStr = s.split(""); 
    if(newStr.every(e=>!Object.keys(parentheses).includes(e))){
        return 0
    }
    const check = (str)=>{
        let stack = []
        for(let i=0; i<str.length; i++){
            if(Object.keys(parentheses).includes(str[i])){
                stack.push(str[i])
            }
            if(parentheses[stack.at(-1)] === str[i]){
                stack.pop();
            }
            
        }
        if(stack.length === 0) return true
    }
    for(let i=0; i<s.length; i++){
        const firstChar = newStr.shift(); 
        newStr.push(firstChar)
        if(check(newStr)){
            answer++;
        }
    }
    return answer
}