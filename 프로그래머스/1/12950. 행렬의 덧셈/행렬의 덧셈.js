function solution(arr1, arr2) {
    return arr1.map((e,idx)=>e.map((e2,idx2)=>e2+arr2[idx][idx2]))
}