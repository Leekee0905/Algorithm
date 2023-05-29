function solution(str1, str2) {
    var answer = 0;
    let strArr1 = []
    let strArr2 = []
    const regex = /^[a-z]*$/; 
    let union = 0
    let intersection = 0
    for(let i=0; i<str1.length-1;i++){
        let set = (str1[i]+str1[i+1]).toLowerCase()
        if(regex.test(set)){
            strArr1.push(set)
        }
    }
    for(let i=0; i<str2.length-1;i++){
        let set = (str2[i]+str2[i+1]).toLowerCase()
        if(regex.test(set)){
            strArr2.push(set)
        }
    }
    
    strArr1.sort()
    strArr2.sort()
    for(let i=0; i<strArr1.length;i++){
        if(strArr2.indexOf(strArr1[i])>=0){
            intersection++
            strArr2.splice(strArr2.indexOf(strArr1[i]),1)
        }
        union++
    }
    union += strArr2.length

    if (union === 0) return 65536
    return Math.floor((intersection/union)*65536)
}
