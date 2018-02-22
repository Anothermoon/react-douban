import Axios from './../util/Axios'

// 按条件搜索电影
// count 默认为20不能修改
export function searchConditionsMovieAjax (params = {
    start: 0
}) {
    Object.assign(params, {
        sort: 'T',
        range: '0,10'
    })
    return Axios.get('/j/new_search_subjects', { params })
}
