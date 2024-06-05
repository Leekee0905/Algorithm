function solution(a, b) {
    var answer = 0;
    if(a===b)
        return a
    if(a>b){
        for(b;b<=a;b++)
            answer += b
    }else{
        for(a;a<=b;a++)
            answer += a
    }
    
    return answer;
}