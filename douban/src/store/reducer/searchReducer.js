import { SEARCH_REQUEST, SEARCH_RESPONCE, SEARCH_ERROR, SEARCH_CLOSE } from './../actions/searchActions'

/**
 * isReq 是否正在请求
 * items 搜索结果列表
 * start 请求的起点
 * count 请求的长度
 * total 总长度
 * errMsg 错误信息
 */
function searchResultsList (state = {
    isReq: false,
    items: [],
    start: 0,
    count: 20,
    total: 0,
    errMsg: ''
}, action) {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                isReq: true
            }
        case SEARCH_RESPONCE:
            let { count, start, total, items } = action.res
            let newResults = {
                ...state,
                count,
                start,
                total,
                isReq: false,
                errMsg: ''
            }
            if (start !== 0) {
                return Object.assign(newResults, {
                    items: [...state.items, ...items]
                })
            } else {
                return Object.assign(newResults, {
                    items
                })
            }
        case SEARCH_ERROR:
            return {
                ...state,
                isReq: false,
                errMsg: action.err
            }
        default:
            return state
    }
}

export default searchResultsList
