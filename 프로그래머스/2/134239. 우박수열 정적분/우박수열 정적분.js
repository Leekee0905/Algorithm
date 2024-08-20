function solution(k, ranges) {
    var answer = [];
    const area = []
    let n = 0;
    const collatz = (num) =>{
        const array = [num];
        while(num > 1){
            if(num % 2 === 0){
                num /= 2
            }
            else{
                num = num * 3 + 1
            }
            array.push(num)
            n++
        }
        return array
        
    }
    const sequence = collatz(k)
    for(let i=0; i<n; i++){
        area[i] = sequence[i+1] - (sequence[i+1] - sequence[i]) / 2
    }
    for(const range of ranges){
        let start = range[0]
        let end = n + range[1]
        let result = 0;
        for(let i=start; i<end; i++){
            result += area[i]
        }
        if(start>end) result = -1
        answer.push(result)
    }
    return answer;
}