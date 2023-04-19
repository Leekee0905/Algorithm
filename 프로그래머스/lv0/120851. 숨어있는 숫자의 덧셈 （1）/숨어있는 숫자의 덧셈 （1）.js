function solution(my_string) {
    const regex = /[0-9]/g
    return my_string.match(regex).reduce((a,b)=>a+Number(b),0);
}