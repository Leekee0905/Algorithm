function solution(binomial) {
    var answer = 0;
    const arr = binomial.split(' ')
    if(arr[1] === '+'){
        return parseInt(arr[0]) + parseInt(arr[2])
    }
    if(arr[1] === '-'){
        return parseInt(arr[0]) - parseInt(arr[2])
    }
    if(arr[1] === '*'){
        return parseInt(arr[0]) * parseInt(arr[2])
    }
    if(arr[1] === '/'){
        return parseInt(arr[0]) / parseInt(arr[2])
    }
}