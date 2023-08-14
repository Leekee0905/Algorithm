function solution(files) {
    const isNotSameHead = (headCompared) => {
        return headCompared !== 0
    }
    const isSameNumber = (prevNumber,currNumber) => {
        return prevNumber - currNumber === 0
    }
    files.sort((prev,curr)=>{
        const regexHead = /\D+/
        const regexNumber = /\d{1,5}/
        const prevHead = prev.match(regexHead)[0]
        const currHead = curr.match(regexHead)[0]
        const prevNumber = prev.match(regexNumber)[0]
        const currNumber = curr.match(regexNumber)[0]
        const headCompared = prevHead.toLowerCase().localeCompare(currHead.toLowerCase())
        
        if(isNotSameHead(headCompared)){
            return headCompared
        }
        if(isSameNumber(prevNumber, currNumber)){
            return 0
        }
        return prevNumber-currNumber
    })
    return files;
}