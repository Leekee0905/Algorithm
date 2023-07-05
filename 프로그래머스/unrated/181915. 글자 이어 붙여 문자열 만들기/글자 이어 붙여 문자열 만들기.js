function solution(my_string, index_list) {
    var answer = '';
    index_list.forEach(e=>{
        for(let i=0; i<my_string.length; i++){
            if(e===i){
                answer+=my_string[i]
            }
        }
    })
    return answer;
}