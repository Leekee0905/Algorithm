function solution(my_string) {
    let getOut = ['a','e','i','o','u']
    return my_string.split('').filter(e=>!getOut.includes(e)).join('');
}