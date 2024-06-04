function solution(n)
{
    return n.toString().split("").reduce((acc,curr)=>Number(acc)+Number(curr),0)
}