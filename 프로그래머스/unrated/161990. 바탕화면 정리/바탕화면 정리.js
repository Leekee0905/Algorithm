function solution(wallpaper) {
    let [top, bottom, left, right] = [51,0,51,0];

    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[0].length; j++){
            if(wallpaper[i][j] === '.')
                continue;
            top = Math.min(top, i)
            bottom = Math.max(bottom, i)
            left = Math.min(left, j)
            right = Math.max(right, j)

        }
    }

    return [top, left, bottom + 1, right + 1];
}