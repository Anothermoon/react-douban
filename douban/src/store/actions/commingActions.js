import makeActionCreator from './../../util/ActionCreators'
import { getCommingMovieAja } from './../../api/comming'
import HotMovie from './../../model/HotMovie'

export const COMMING_MOVIE_REQUEST = 'COMMING_MOVIE_REQUEST'
export const COMMING_MOVIE_RESPONCE = 'COMMING_MOVIE_RESPONCE'
export const COMMING_MOVIE_ERROR = 'COMMING_MOVIE_ERROR'
export const COMMING_MOVIE_REFRESH = 'COMMING_MOVIE_REFRESH'

export const commingMovieRequest = makeActionCreator(COMMING_MOVIE_REQUEST)
export const commingMovieResponce = makeActionCreator(COMMING_MOVIE_RESPONCE)
export const commingMovieError = makeActionCreator(COMMING_MOVIE_ERROR)
export const commingMovieRefresh = makeActionCreator(COMMING_MOVIE_REFRESH)

function cacheCommingMovie (state) {
    const commingMovie = state['commingMovieList']
    if (!commingMovie) {
        return true
    } else if (commingMovie.isReq) {
        return false
    } else {
        return commingMovie.isOverdue
    }
}

export function getComming (params) {
    return (dispatch, getState) => {
        if (cacheCommingMovie(getState())) {
            dispatch(commingMovieRequest())
            return getCommingMovieAja(params).then(res => {
                console.log(res)
                // dispatch(commingMovieResponce())
            }).catch(err => {
                dispatch(commingMovieError())
            })
        } else {
            return Promise.resolve()
        }
    }
}
