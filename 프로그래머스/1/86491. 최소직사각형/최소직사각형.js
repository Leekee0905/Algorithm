function solution(sizes) {
    let [width , height] = [0,0]
    sizes.forEach(e=>{
        width = Math.max(width, Math.max(...e));
        height = Math.max(height,Math.min(...e))
    })
    return width * height
}