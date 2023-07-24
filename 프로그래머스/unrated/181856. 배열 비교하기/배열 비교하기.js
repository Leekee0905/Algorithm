function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length < arr2.length){
        answer = -1
    }else if(arr1.length > arr2.length){
        answer = 1
    }else{
        if(arr1.reduce((a,b)=>a+b) > arr2.reduce((a,b)=>a+b)){
            answer = 1
        }else if(arr1.reduce((a,b)=>a+b) < arr2.reduce((a,b)=>a+b)){
            answer = -1
        }
        else
            answer = 0
    }
    return answer;
}