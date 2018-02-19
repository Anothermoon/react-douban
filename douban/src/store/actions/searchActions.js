import makeActionCreator from './../../util/ActionCreators'
import { searchMovieAjax } from './../../api/search'
import HotMovie from './../../model/HotMovie'

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_RESPONCE = 'SEARCH_RESPONCE'
export const SEARCH_ERROR = 'SEARCH_ERROR'

export const searchRequest = makeActionCreator(SEARCH_REQUEST)
export const searchResponce = makeActionCreator(SEARCH_RESPONCE, 'res')
export const searchError = makeActionCreator(SEARCH_ERROR, 'err')

export function search (params) {
    return (dispatch) => {
        dispatch(searchRequest)
        return searchMovieAjax({
            q: params.value,
            start: params.start
        }).then(res => {
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
            dispatch(searchResponce({
                count,
                start,
                total,
                items
            }))
        }).catch(err => {
            dispatch(searchError('搜索失败'))
        })
    }
}
