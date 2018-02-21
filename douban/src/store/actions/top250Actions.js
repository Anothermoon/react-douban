import makeActionCreator from './../../util/ActionCreators'
import { getTop250Ajax } from './../../api/top250'
import HotMovie from './../../model/HotMovie'

export const TOP250_REQUEST = 'TOP250_REQUEST'
export const TOP250_RESPONCE = 'TOP250_RESPONCE'
export const TOP250_ERROR = 'TOP250_ERROR'
export const TOP250_REFRESH = 'TOP250_REFRESH'

export const top250Request = makeActionCreator(TOP250_REQUEST)
export const top250Responce = makeActionCreator(TOP250_RESPONCE, 'res')
export const top250Error = makeActionCreator(TOP250_ERROR, 'err')
export const top250Refresh = makeActionCreator(TOP250_REFRESH)

function cacheTop250(state) {
    const top250List = state['top250List']
    if (!top250List) {
        return true
    } else if (top250List.isReq) {
        return false
    } else {
        return top250List.isOverdue
    }
}

export function getTop250 (params) {
    return (dispatch, getState) => {
        if (cacheTop250(getState())) {
            dispatch(top250Request())
            return getTop250Ajax(params).then(res => {
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
                dispatch(top250Responce({
                    count,
                    start,
                    total,
                    items
                }))
            }).catch(err => {
                dispatch(top250Request())
            })
        } else {
            return Promise.resolve()
        }
    }
}
