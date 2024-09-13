function solution(genres, plays) {
    const genreMap = new Map();
    const result = [];
    genres.forEach((genre, idx) => {
        if (!genreMap.has(genre)) {
            genreMap.set(genre, { totalPlays: 0, songs: [] });
        }
        genreMap.get(genre).totalPlays += plays[idx]; 
        genreMap.get(genre).songs.push({ id: idx, play: plays[idx] }); 
    });

    const sortedGenres = [...genreMap.entries()].sort((a, b) => b[1].totalPlays - a[1].totalPlays);
    
    
    sortedGenres.forEach(([genre, info]) => {
        const sortedSongs = info.songs.sort((a, b) => {
            if (b.play === a.play) {
                return a.id - b.id; 
            }
            return b.play - a.play;
        });
        
        result.push(sortedSongs[0].id);
        if (sortedSongs[1]) {
            result.push(sortedSongs[1].id);
        }
    });

    return result;
}