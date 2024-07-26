const check = (p) => {
        let stack = []
        for(let i=0; i<p.length; i++){
            if(p[i] === "(")
                stack.push(p[i])
            if(p[i] === ")" && stack.at(-1) === "("){
                stack.pop()
            }
        }
         return stack.length === 0 ? true : false   
    }

function solution(p) {
    var answer = '';
    let [open, close] = [0,0]
    
    if (!p) return ''; 
    
    for (let i=0; i<p.length; i++) {
        p[i] === "(" ? open++ : close++
        
        if (open === close) {
            if (check(p.slice(0, i+1))) {
                answer = p.slice(0, i+1) + solution(p.slice(i+1));
                return answer;
            } else {
                answer = '(' + solution(p.slice(i+1)) + ')';
                for (let j=1; j<i; j++) {
                    if (p[j] === '(') {
                        answer = answer + ')'
                    } else {
                        answer = answer + '('
                    }
                }
                return answer;
            }
        }
    }    
}