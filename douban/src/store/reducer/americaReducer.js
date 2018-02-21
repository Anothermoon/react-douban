import {
    AMERICA_REQUEST,
    AMERICA_RESPONCE,
    AMERICA_ERROR
} from './../actions/americaActions'

/**
 * isReq 是否正在请求
 * items 热门电影列表
 * errMsg 错误信息
 */
function americaList (state = {
    isReq: false,
    items: [],
    errMsg: ''
}, action) {
    switch(action.type) {
        case AMERICA_REQUEST:
            return {
                ...state,
                isReq: true
            }
        case AMERICA_RESPONCE:
            let { items } = action.res
            return Object.assign({}, state, {
                isReq: false,
                errMsg: '',
                items: [...state.items, ...items]
            })
        case AMERICA_ERROR:
            return {
                ...state,
                isReq: false,
                errMsg: action.err
            }
        default:
            return state
    }
}

export default americaList
