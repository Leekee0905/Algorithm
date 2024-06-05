function solution(num) {
    let i=0;
    if(num === 1){
        return 0
    }
    while(i<=500){
        num % 2 === 0 ? num = num/2 : num = num*3+1
        i++
        if(num === 1)
            return i
    }
    return -1
}