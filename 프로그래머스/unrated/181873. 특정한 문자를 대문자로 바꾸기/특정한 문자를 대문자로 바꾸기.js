function solution(my_string, alp) {
    return my_string.split('').map(e=>e===alp ? e.toUpperCase() : e).join('')
}