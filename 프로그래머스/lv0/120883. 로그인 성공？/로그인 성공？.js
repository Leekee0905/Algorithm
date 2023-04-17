function solution(id_pw, db) {
    const [id,pw] = id_pw
    let answer = 'fail'
    for(const s of db){
        if(s[0]===id && s[1]===pw){
            answer = 'login'
        }
        if(s[0]===id && s[1]!==pw){
            answer = 'wrong pw'
        }
    }
    return answer
}