function solution(array) {
    return array.sort((a,b)=>b-a)[Math.ceil(array.length/2)-1];
}