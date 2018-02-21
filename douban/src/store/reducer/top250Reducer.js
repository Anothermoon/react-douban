import {
    TOP250_REQUEST,
    TOP250_RESPONCE,
    TOP250_ERROR,
    TOP250_REFRESH
} from './../actions/top250Actions'

function top250List (state = {
    isReq: false,
    isOverdue: true,
    items: [],
    start: 0,
    count: 20,
    total: 0,
    errMsg: ''
}, action) {
    switch(action.type) {
        case TOP250_REQUEST:
            return {
                ...state,
                isReq: true
            }
        case TOP250_RESPONCE:
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
        case TOP250_ERROR:
            return {
                ...state,
                isReq: false,
                errMsg: action.err
            }
        case TOP250_REFRESH:
            return {
                ...state,
                isOverdue: true
            }
        default:
            return state
    }
}

export default top250List
