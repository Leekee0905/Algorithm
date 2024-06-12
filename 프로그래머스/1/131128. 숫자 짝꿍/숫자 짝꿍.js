function solution(X, Y) {
    let friend = '';
    X = X.split('');
    Y = Y.split('');
    for(let i=0; i<10; i++){
        let tempX = X.filter(a=>String(i)===a).length;
        let tempY = Y.filter(a=>String(i)===a).length;
        friend +=String(i).repeat(Math.min(tempX,tempY))
    }
    
    if(friend === "") return "-1"
    
    if(Number(friend)===0) return "0"
    
    return friend.split("").sort((a,b)=>b-a).join("")
}