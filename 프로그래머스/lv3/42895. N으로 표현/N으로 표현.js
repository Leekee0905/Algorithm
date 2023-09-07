function solution(N, number) {
    let dp = Array.from(new Array(9), ()=>new Set());
    
    if(N===number)
        return 1
    else{
        dp.forEach((e,idx)=>{
            if(idx !== 0){
                e.add(Number(String(N).repeat(idx)))
            }
        })
        
        for(let i=1; i<9; i++){
            for(let j=1; j<i; j++){
                for(const first of dp[j]){
                    for(const second of dp[i-j]){
                        dp[i].add(first+second)
                        dp[i].add(first-second)
                        dp[i].add(first*second)
                        dp[i].add(first/second)
                    }
                }
            }
            if(dp[i].has(number)){
                return i
            }
        }
        return -1
    }
}

// num = int(str(N)*i)
//         case.add(num)
//         for j in range(0,i-1):
//             for op1 in dp[j]:
//                 for op2 in dp[-j-1]:
//                     case.add(op1-op2)
//                     case.add(op1+op2)
//                     case.add(op1*op2)
//                     if op2!=0:
//                         case.add(op1//op2)
//         if number in case:
//             answer=i
//             break
//         dp.append(case)