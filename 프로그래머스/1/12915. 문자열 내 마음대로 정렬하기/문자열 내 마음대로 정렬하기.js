function solution(strings, n) {
    return strings.sort((a,b)=>{
        if(a[n] === b[n]){
            return(a>b)-(b>a)
        }
        else{
            return (a[n]>b[n])-(b[n]>a[n])}
    });
}