import Axios from './../util/Axios'

// 获取热门电影
export function getHotMovieAjax (params = {
    start: 0,
    count: 20
}) {
    return Axios.get('/v2/movie/in_theaters', { params })
}