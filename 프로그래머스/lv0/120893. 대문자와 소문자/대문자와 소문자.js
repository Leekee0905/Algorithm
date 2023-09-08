function solution(my_string) {
    return my_string.split('').map(e=>{
        if(e.toLowerCase()=== e){
            return e.toUpperCase()
        }
        else return e.toLowerCase()
    }).join('');
}