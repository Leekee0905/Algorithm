function solution(num_list, n) {
    return num_list.join('').slice(n-1).split('').map(e=>parseInt(e));
}