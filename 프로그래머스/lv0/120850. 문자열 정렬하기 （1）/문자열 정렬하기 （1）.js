function solution(my_string) {
    return my_string.split('').filter(e=>Number.isInteger(Number(e))).sort((a,b)=>Number(a)-b,0).map(e=>Number(e));
}