function solution(numbers) {
    let answer = new Set();
    const arr = numbers.split("")
    const isPrime = (num) => {
        if(num === 1) return false;
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return true; 
    }

    const getNumber = (numbersArr, currentNumber) => {
        if(numbersArr.length){
            for(let i=0; i<numbersArr.length; i++){
                const temp=[...numbersArr];
                temp.splice(i,1);
                if(isPrime(parseInt(currentNumber + numbersArr[i])) && parseInt(currentNumber + numbersArr[i]) !== 0){
                    answer.add(parseInt(currentNumber + numbersArr[i]))
                }
                getNumber(temp,currentNumber + numbersArr[i])
            }
        }
    }
    getNumber(arr,'')

    return answer.size;
}

