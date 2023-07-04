function solution(n) {
    return Math.sqrt(n)-Math.floor(Math.sqrt(n)) === 0 ? 1 : 2;
}