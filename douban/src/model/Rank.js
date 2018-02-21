import HotMovie from './HotMovie'

class Rank {
    constructor (box, movie) {
        this.box = box
        this.movie = createMovie(movie)
    }
}

function createMovie (movie) {
    return new HotMovie({
        id: movie.id,
        rating: movie.rating,
        genres: movie.genres,
        casts: movie.casts,
        images: movie.images,
        original_title: movie.original_title,
        subtype: movie.subtype,
        title: movie.title,
        year: movie.year
    })
}

export default Rank
