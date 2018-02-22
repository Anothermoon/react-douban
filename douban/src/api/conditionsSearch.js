import Axios from './../util/Axios'

// 按条件搜索电影
export function searchConditionsMovieAjax (params) {
    Object.assign(params, {
        sort: 'T',
        range: '0,10'
    })
    return Axios.get('/j/new_search_subjects', { params })
}
