function solution(schedules, timelogs, startday) {
    const timeConverter = (number) => {
        const hour = number.toString().slice(0,-2);
        const minute = number.toString().slice(-2);
        return Number(hour) * 60 + Number(minute)
    }
    const convertedSchedules = schedules.map(e=>timeConverter(e))
    const convertedTimelogs = timelogs.map(e=>e.map(ele=>timeConverter(ele)))
    
    const filteredTimelogs = convertedTimelogs.filter((e,idx)=>{
        const timelines = e.map((ele,day)=>{
            const today = (startday+day)%7
            if(today === 6 || today === 0) return true
            if(convertedSchedules[idx]+10 < ele){
                
                return false
            }
            return true
            
        })
        return timelines.every(e=>e===true)
    })
    console.log(filteredTimelogs)
    return filteredTimelogs.length;
}