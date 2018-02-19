import { HOT_MOVIE_REQUEST, HOT_MOVIE_RESPONCE, HOT_MOVIE_ERROR, HOT_MOVIE_REFRESH } from './../actions/hotActions'

/**
 * isReq 是否正在请求
 * isOverdue 数据是否过期
 * items 热门电影列表
 * start 请求的起点
 * count 请求的长度
 * total 总长度
 * errMsg 错误信息
 */
function hotMovieList (state = {
    isReq: false,
    isOverdue: true,
    items: [],
    start: 0,
    count: 20,
    total: 0,
    errMsg: ''
}, action) {
    switch (action.type) {
        case HOT_MOVIE_REQUEST:
            return {
                ...state, isReq: true
            }
        case HOT_MOVIE_RESPONCE:
            let { count, start, total, items } = action.res
            return Object.assign({}, state, {
                isReq: false,
                isOverdue: false,
                errMsg: '',
                count,
                start,
                total,
                items: [...state.items, ...items]
            })
        case HOT_MOVIE_ERROR:
            return {
                ...state,
                isReq: false,
                errMsg: action.err
            }
        case HOT_MOVIE_REFRESH:
            return {
                ...state, isOverdue: true
            }
        default:
            return state
    }
}

export default hotMovieList