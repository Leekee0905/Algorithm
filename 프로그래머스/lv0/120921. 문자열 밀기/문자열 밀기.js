function solution(A, B) {
    let aTemp = A.split('')
    let cnt=0;
    while(aTemp.join('') !== B){
        aTemp.unshift(aTemp.pop())
        cnt++
        if(cnt>B.length){
            return -1
            break;
        }
    }
    return cnt
}