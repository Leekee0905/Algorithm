function solution(n, arr1, arr2) {
    var answer = [];
    let arr3 = ""
    for(let i = 0; i<n; i++){
        arr1[i] = arr1[i].toString(2).padStart(n,'0')
        arr2[i] = arr2[i].toString(2).padStart(n,'0')

        for(let j=0;j<n;j++){
            if(arr1[i][j]==='0'&& arr1[i][j]===arr2[i][j]){
                arr3+=(' ')
                console.log(arr3)
            }else{
                arr3+=('#')
                console.log(arr3)
            }
        }
        answer.push(arr3)
        arr3 = ""
    }
    

    return answer;
}