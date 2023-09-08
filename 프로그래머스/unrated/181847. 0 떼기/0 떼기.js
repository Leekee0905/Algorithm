function solution(n_str) {
    let answer = []
    let arr = n_str.split('')
    for(let i=0; i<arr.length; i++){
        if(arr[i] === '0'){
            if(answer.length > 0){
                answer.push(arr[i])
            }else{
                continue;
            }
        }else{
            answer.push(arr[i])
            
        }
    }
    return answer.join('');
}