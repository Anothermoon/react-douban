import makeActionCreator from './../../util/ActionCreators'
import { getHotMovieAjax } from './../../api/hot'

export const HOT_MOVIE_REQUEST = 'HOT_MOVIE_REQUEST'
export const HOT_MOVIE_RESPONCE = 'HOT_MOVIE_RESPONCE'
export const HOT_MOVIE_ERROR = 'HOT_MOVIE_ERROR'

export const hotMovieRequest = makeActionCreator(HOT_MOVIE_REQUEST)
export const hotMovieResponce = makeActionCreator(HOT_MOVIE_RESPONCE, res)
export const hotMovieError = makeActionCreator(HOT_MOVIE_ERROR)

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
