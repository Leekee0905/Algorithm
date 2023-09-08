function solution(hp) {
    let answer = 0;
    while(hp>=3){
        if(hp>=5){
            answer += Math.floor(hp / 5)
            hp = hp % 5
        }
        else if(hp >=3){
            answer += Math.floor(hp / 3)
            hp = hp % 3
        }
    }
    return answer + hp;
}