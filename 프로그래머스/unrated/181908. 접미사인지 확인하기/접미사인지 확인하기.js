function solution(my_string, is_suffix) {
    let string = []
    for(let i=0; i<my_string.length; i++){
        string.push(my_string.slice(0+i))
    }
    
    return string.includes(is_suffix)?1:0;
}