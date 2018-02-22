import { getHotMovieAjax } from './../../api/hot'
import HotMovie from './../../model/HotMovie'
import makeActionCreator from './../../util/ActionCreators'

export const HOT_MOVIE_REQUEST = 'HOT_MOVIE_REQUEST'
export const HOT_MOVIE_RESPONCE = 'HOT_MOVIE_RESPONCE'
export const HOT_MOVIE_ERROR = 'HOT_MOVIE_ERROR'
export const HOT_MOVIE_REFRESH = 'HOT_MOVIE_REFRESH'

export const hotMovieRequest = makeActionCreator(HOT_MOVIE_REQUEST)
export const hotMovieResponce = makeActionCreator(HOT_MOVIE_RESPONCE, 'res')
export const hotMovieError = makeActionCreator(HOT_MOVIE_ERROR, 'err')
export const hotMovieRefresh = makeActionCreator(HOT_MOVIE_REFRESH)

// 避免多余的ajax请求
function cacheHotMovie (state) {
    const hotMovie = state['hotMovieList']
    if (!hotMovie) {
        return true
    } else if (hotMovie.isReq) {
        return false
    } else {
        return hotMovie.isOverdue
    }
}

// 异步Actions
export function getHot (params) {
    return (dispatch, getState) => {
        if (cacheHotMovie(getState())) {
            dispatch(hotMovieRequest())
            return getHotMovieAjax(params).then(res => {
                let { count, start, total, subjects } = res
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
                dispatch(hotMovieResponce({
                    count,
                    start,
                    total,
                    items
                }))
            }).catch(err => {
                dispatch(hotMovieError('请求失败'))
            })
        } else {
            return Promise.resolve()
        }
    }
}
