function solution(nums) {
    let answer = 0;
    const isPrime = (num) => {
        if(num<2) return false
        if(num === 2) return true
        for(let i=2; i<num; i++){
            if(num%i === 0){
                return false
            }
        }
        return true
    }
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<i; j++){
            for(let k=0; k<j; k++){
                if(isPrime(nums[i]+nums[j]+nums[k])){
                    answer++
                }
            }
        }
    }
    
    return answer;
}