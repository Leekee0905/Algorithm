function solution(number, k) {
    var answer = '';
    let stack = [];
     for(let i=0; i<number.length; i++){
         while(stack && stack[stack.length-1] < number[i] && k > 0){
             k--
             stack.pop()
         }
         stack.push(number[i])
     }
    stack.splice(number.length-k,k);

    return stack.join('');
}