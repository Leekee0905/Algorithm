function solution(s, skip, index) {
    var answer = '';
    for(let alpha of s){
        let code = alpha.charCodeAt()
        let i = index
        while(i>0){
            code = code === 122 ? 97 : code+1
            if (!skip.includes(String.fromCharCode(code))) {
                i --
            }
        }
        answer += String.fromCharCode(code)
    }
    return answer;
}