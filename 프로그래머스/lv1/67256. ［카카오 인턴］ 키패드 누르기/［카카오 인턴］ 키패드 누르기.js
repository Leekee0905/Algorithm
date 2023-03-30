function solution(numbers, hand) {
    var answer = '';
    const phone = [[1,2,3],
                   [4,5,6],
                   [7,8,9],
                   ['*',0,'#']]
    

    let leftPosition = [3,0]
    let rightPosition = [3,2]
    
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<phone.length; j++){
            if(numbers[i] === phone[j][0]){
                answer += "L"
                leftPosition = [j,0]
                }
            else if(numbers[i]===phone[j][2]){
                answer+= "R"
                rightPosition=[j,2]
            }
            else if(numbers[i]===phone[j][1]){
                let middlePosition = [j,1]
                let leftDistance = Math.abs(leftPosition[0] - middlePosition[0])
                +Math.abs(leftPosition[1]-middlePosition[1]);
                let rightDistance = Math.abs(rightPosition[0] - middlePosition[0])
                +Math.abs(rightPosition[1]-middlePosition[1]);
                
                if(leftDistance === rightDistance){
                    hand === "right" ? (answer+= "R", rightPosition = middlePosition): (answer += "L", leftPosition = middlePosition)
                }
                else if(leftDistance > rightDistance){
                    answer += "R"
                    rightPosition = middlePosition
                }
                else {
                    answer += "L"
                    leftPosition = middlePosition
                }
                
            }
        }
        
    }
    

    return answer;
}