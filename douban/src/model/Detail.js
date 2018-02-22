class Detail {
    constructor ({ id, title, year, casts, genres, images, rating, aka, countries, summary }) {
        this.id = id
        this.title = title
        this.year = year
        // 主演
        this.casts = casts
        // 类型
        this.genres = genres
        this.images = images
        // 评价
        this.rating = rating
        // 别名
        this.aka = aka
        // 地区
        this.countries = countries
        // 简介
        this.summary = summary
    }
}

export default Detail
