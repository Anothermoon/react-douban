import makeActionCreator from './../../util/ActionCreators'
import { getComingMovieAjax } from './../../api/coming'
import HotMovie from './../../model/HotMovie'

export const COMMING_MOVIE_REQUEST = 'COMMING_MOVIE_REQUEST'
export const COMMING_MOVIE_RESPONCE = 'COMMING_MOVIE_RESPONCE'
export const COMMING_MOVIE_ERROR = 'COMMING_MOVIE_ERROR'
export const COMMING_MOVIE_REFRESH = 'COMMING_MOVIE_REFRESH'

export const commingMovieRequest = makeActionCreator(COMMING_MOVIE_REQUEST)
export const commingMovieResponce = makeActionCreator(COMMING_MOVIE_RESPONCE, 'res')
export const commingMovieError = makeActionCreator(COMMING_MOVIE_ERROR, 'err')
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
            return getComingMovieAjax(params).then(res => {
                console.log(res)
                const { count, start, subjects, total } = res
                let items = subjects.map(item => new HotMovie({
                    id: item.id,
                    rating: item.rating,
                    genres: item.genres,
                    casts: item.casts,
                    images: item.images,
                    original_title: item.original_title,
                    subtype: item.subtype,
                    title: item.title,
                    year: item.year
                }))
                dispatch(commingMovieResponce({
                    count,
                    start,
                    total,
                    items
                }))
            }).catch(err => {
                dispatch(commingMovieError())
            })
        } else {
            return Promise.resolve()
        }
    }
}
