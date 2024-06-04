function solution(n) {
    return Array.from({length: n},(_,i)=>++i).reduce((acc,curr)=>{
        if(n%curr===0){
            return acc+curr
        }else{
            return acc
        }
    },0);
}