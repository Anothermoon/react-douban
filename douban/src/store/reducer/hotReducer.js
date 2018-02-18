import { HOT_MOVIE_REQUEST, HOT_MOVIE_RESPONCE, HOT_MOVIE_ERROR, HOT_MOVIE_REFRESH } from './../actions/hotActions'

function hotMovieList (state = {
    isReq: false,
    isOverdue: false,
    items: [],
    errMsg: ''
}, action) {
    switch (action.type) {
        case HOT_MOVIE_REQUEST:
            return {
                ...state, isReq: true, isOverdue: false
            }
        case HOT_MOVIE_RESPONCE:
            return {
                ...state,isReq: false, isOverdue: false, items: action.list, errMsg: ''
            }
        case HOT_MOVIE_ERROR:
            return {
                ...state, errMsg: action.err
            }
        case HOT_MOVIE_REFRESH:
            return {
                ...state, isOverdue: false
            }
        default:
            return state
    }
}

export default hotMovieList