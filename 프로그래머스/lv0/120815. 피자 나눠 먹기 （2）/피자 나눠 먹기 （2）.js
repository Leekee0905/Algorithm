function solution(n) {
    const gcd = (a,b) => {
        if(b === 0) return a;
        return gcd(b, a%b)
    }
    const lcm = (a,b) => (a*b)/gcd(a,b)
    return lcm(n,6)/6
}