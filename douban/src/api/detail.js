import Axios from './../util/Axios'

// 获取影片详细信息
export function getMovieDetailAjax (id) {
    return Axios.get(`/v2/movie/subject/${id}`)
}

