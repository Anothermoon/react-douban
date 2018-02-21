import Axios from './../util/Axios'

// 即将上映电影
export function getComingMovieAjax (params = {
    start: 0,
    count: 20
}) {
    return Axios.get('/v2/movie/coming_soon', { params })
}
