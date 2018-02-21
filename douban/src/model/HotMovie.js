import Performer from './Performer'

class HotMovie {
    constructor ({ id, rating, genres, casts, images, original_title, subtype, title, year }) {
        this.id = id
        this.rating = rating
        this.genres = genres
        this.casts = createCasts(casts)
        this.images = images
        this.originalTitle = original_title
        this.subtype = subtype
        this.title = title
        this.year = year
    }
}

function createCasts (casts) {
    return casts.map((castItem) => new Performer(castItem.id, castItem.name, castItem.avatars))
    // return map((castItem) => new Performer(castItem.id, castItem.name, castItem.avatars), casts)
}

export default HotMovie
