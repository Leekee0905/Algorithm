function solution(arr) {
    var answer = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[0].length; j++){
            if(arr[i][j] === arr[j][i]){
                answer = 1
            }
            else{
                return 0;
            }
                
        }
    }
    return answer;
}