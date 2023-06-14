function solution(numbers) {
    var answer = '';
    const number = {one : 1, two:2, three: 3, four: 4, five: 5, six:6, seven:7, eight: 8, nine:9,zero:0}
    let temp = ''
    for(let i=0; i<numbers.length; i++){
        temp += numbers[i]
        if(Object.keys(number).includes(temp)){
            answer += number[temp]
            temp = ''
        }
        
    }
    return parseInt(answer);
}