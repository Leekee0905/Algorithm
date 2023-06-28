function solution(date1, date2) {
    const day1 = new Date(`${date1[0]}-${date1[1]}-${date1[2]}`)
    const day2 = new Date(`${date2[0]}-${date2[1]}-${date2[2]}`)

    return day2-day1 > 0 ? 1 : 0;
}