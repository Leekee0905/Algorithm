function solution(num, total) {
    var answer = [];
    if(num%2===1){
        answer = Array.from({length:num},(_,idx)=>Math.floor(total/num)-Math.floor(num/2)+idx++)
    }else{
        answer = Array.from({length: num},(_,idx)=>Math.ceil(total/num)-Math.floor(num/2)+idx++)
    }
    return answer;
}