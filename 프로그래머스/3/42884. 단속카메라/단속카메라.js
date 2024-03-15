function solution(routes) {
    let answer = 0;        
    let preCamera = -30001;
    
    routes.sort((a,b)=>a[1]-b[1]);
    console.log(routes)
    routes.map((e)=>{
        if(e[0] > preCamera ){
            answer ++;
            preCamera = e[1];
        }
    })
    return answer;
}