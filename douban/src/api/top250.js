import Axios from './../util/Axios'

export function getTop250Ajax (params = {
    start: 0,
    count: 20
}) {
    return Axios.get('/v2/movie/top250', { params })
}
