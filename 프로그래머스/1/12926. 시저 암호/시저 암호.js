function solution(s, n) {
    let answer = ''
    const isLowerCase = (string) => string === string.toLowerCase()
    const isUpperCase = (string) => string === string.toUpperCase()
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){
            answer += " "
            continue;
        }
        if(isLowerCase(s[i])){
            const aCode = "a".charCodeAt()
            answer += String.fromCharCode((s[i].charCodeAt() - aCode + n )%26+aCode)
        }
        if(isUpperCase(s[i])){
            const aCode2 = "A".charCodeAt()
            answer += String.fromCharCode((s[i].charCodeAt() - aCode2 + n )%26+aCode2)
        }
    }
    return answer;
}