function solution(arrayA, arrayB) {
    var answer = 0;
    let gcdA = arrayA[0];
    let gcdB = arrayB[0];
    const gcd = (a,b) => {
        let remainder = a % b;
        return b === 0 ? a : gcd(b,remainder)
    }

    for(let i=1; i<arrayA.length; i++){
        gcdA = gcd(gcdA, arrayA[i])
        gcdB = gcd(gcdB, arrayB[i])
    }
    if(gcdA === 1) gcdA = 0;
    if(gcdB === 1) gcdB = 0;
    if(arrayA.every(e=>e%gcdB !== 0)) answer = Math.max(answer, gcdB);
    if(arrayB.every(e=>e%gcdA !== 0)) answer = Math.max(answer, gcdA);
    
    return answer;
}