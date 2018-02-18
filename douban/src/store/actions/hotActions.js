import makeActionCreator from './../../util/ActionCreators'
import { getHotMovieAjax } from './../../api/hot'

export const HOT_MOVIE_REQUEST = 'HOT_MOVIE_REQUEST'
export const HOT_MOVIE_RESPONCE = 'HOT_MOVIE_RESPONCE'
export const HOT_MOVIE_ERROR = 'HOT_MOVIE_ERROR'
export const HOT_MOVIE_REFRESH = 'HOT_MOVIE_REFRESH'

export const hotMovieRequest = makeActionCreator(HOT_MOVIE_REQUEST)
export const hotMovieResponce = makeActionCreator(HOT_MOVIE_RESPONCE, 'list')
export const hotMovieError = makeActionCreator(HOT_MOVIE_ERROR, 'err')
export const hotMovieRefresh = makeActionCreator(HOT_MOVIE_REFRESH)

// 避免多余的ajax请求
function cacheHotMovie () {

}

// 异步Actions
export function getHot (params) {
    return function (dispatch) {
        dispatch(hotMovieRequest)
        return getHotMovieAjax(params).then(res => {
            dispatch(hotMovieResponce, res)
        }).catch(err => {
            dispatch(hotMovieError, err)
        })
    }
}
