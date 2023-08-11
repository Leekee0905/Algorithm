function solution(cipher, code) {
    return cipher.split('').filter((e,idx)=>(idx+1)%code===0).join('')
}