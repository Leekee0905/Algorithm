function solution(code) {
    var answer = '';
    let mode = 0;
    for(let i=0;i<code.length;i++){
        if(code[i]==='1'){
            if(mode === 0)
                mode = 1
            else
                mode = 0
            continue;
        }
        if(mode === 0){
            if(i%2===0){
                answer += code[i]
            }
        }else{
            if(i%2===1){
                answer += code[i]
            }
        }
    }
    return answer === '' ? "EMPTY" : answer;
}