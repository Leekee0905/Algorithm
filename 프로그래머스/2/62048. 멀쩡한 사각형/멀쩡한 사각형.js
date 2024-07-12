function solution(w, h) {
    if(w === 1 || h === 1) return 0;
    const gcd = (a,b) => {
        let remainder = a % b;
        return b === 0 ? a : gcd(b,remainder)
    }
    return (w*h - (w+h-gcd(w,h)));
}