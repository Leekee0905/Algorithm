function solution(my_string, indices) {
    return my_string.split('').filter((e,idx)=>!indices.includes(idx)).join('');
}