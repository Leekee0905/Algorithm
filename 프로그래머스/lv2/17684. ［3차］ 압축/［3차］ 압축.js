function solution(msg) {
    var answer = [];
    let dic = {}
    let idx = 26
    
    for(let i=0; i<idx; i++){
        dic[String.fromCharCode(i+65)] = i+1
    }

    
    while(msg !== ""){
        for(let i=msg.length; i >= 0; i--){
            const w = msg.slice(0,i)
            const wc = msg.slice(0,i+1)
            
            if(dic[w]){
                answer.push(dic[w])
                msg = msg.slice(i,msg.length)
                dic[wc] = ++idx
                break;
            }
        }
    }
    
    return answer;
}