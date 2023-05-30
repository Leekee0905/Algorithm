function solution(my_string, queries) {
    let string = my_string.split('')
    for(const query of queries){
        let slicedText = string.slice(query[0],query[1]+1).reverse().join('')

        string.splice(query[0],query[1]-query[0]+1)
        string.splice(query[0],0,...slicedText)

    }

    return string.join('');
}