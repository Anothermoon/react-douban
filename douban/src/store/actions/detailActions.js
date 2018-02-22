import makeActionCreator from './../../util/ActionCreators'
import { getMovieDetailAjax } from './../../api/detail'
import Detail from './../../model/Detail'

export const DETAIL_REQUEST = 'DETAIL_REQUEST'
export const DETAIL_RESPONCE = 'DETAIL_RESPONCE'
export const DETAIL_ERROR = 'DETAIL_ERROR'
export const DETAIL_CLOSE = 'DETAIL_CLOSE'
export const DETAIL_REFRESH = 'DETAIL_REFRESH'

export const detailRequest = makeActionCreator(DETAIL_REQUEST)
export const detailResponce = makeActionCreator(DETAIL_RESPONCE, 'res')
export const detailError = makeActionCreator(DETAIL_ERROR, 'err')
export const detailClose = makeActionCreator(DETAIL_CLOSE)
export const detailRefresh = makeActionCreator(DETAIL_REFRESH)

function cacheDetail (state) {
    const movieDetail = state['movieDetail']
    if (!movieDetail) {
        return true
    } else if (movieDetail.isReq) {
        return false
    } else {
        return movieDetail.isOverdue
    }
}

export function getDetail (id) {
    return (dispatch, getState) => {
        if (cacheDetail(getState())) {
            dispatch(detailRequest())
            return getMovieDetailAjax(id).then(res => {
                let detail = new Detail({
                    id: res.id,
                    title: res.title,
                    year: res.year,
                    casts: res.casts,
                    genres: res.genres,
                    images: res.images,
                    rating: res.rating,
                    aka: res.aka,
                    countries: res.countries,
                    summary: res.summary
                })
                dispatch(detailResponce({
                    id: res.id,
                    detail
                }))
            }).catch(err => {
                dispatch(detailError('请求失败'))
            })
        } else {
            return Promise.resolve()
        }
    }
}
