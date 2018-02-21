import Axios from './../util/Axios'

// 即将上映电影
export function getAmericaAjax () {
    return Axios.get('/v2/movie/us_box')
}
