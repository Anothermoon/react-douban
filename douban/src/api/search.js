import Axios from './../util/Axios'

export function searchMovieAjax (params) {
    return Axios.get('/v2/movie/search', { params })
}
