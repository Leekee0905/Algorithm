function solution(my_string, n) {
    return my_string.split('').map(e=>e.repeat(n)).join('');
}