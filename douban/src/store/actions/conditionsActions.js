import { searchConditionsMovieAjax } from './../../api/conditionsSearch'
import makeActionCreator from './../../util/ActionCreators'
import Movie from './../../model/Movie'

export const TERM_REQUEST = 'TERM_REQUEST'
export const TERM_RESPONCE = 'TERM_RESPONCE'
export const TERM_ERROR = 'TERM_ERROR'
export const TERM_REFRESH = 'TERM_REFRESH'
export const TERM_ADD_TAGS = 'ADD_TAGS'
export const TERM_DELETE_TAGS = 'TERM_DELETE_TAGS'

export const termRequest = makeActionCreator(TERM_REQUEST)
export const termResponce = makeActionCreator(TERM_RESPONCE, 'res')
export const termError = makeActionCreator(TERM_ERROR, 'err')
export const termRefresh = makeActionCreator(TERM_REFRESH)
export const termAddTags = makeActionCreator(TERM_ADD_TAGS, 'tag')
export const termDeleteTags = makeActionCreator(TERM_DELETE_TAGS, 'key')

// 缓存
function cacheTerm (state) {
    const termList = state['termList']
    if (!termList) {
        return true
    } else if (termList.isReq) {
        return false
    } else {
        return termList.isOverdue
    }
}

export function getTermMovie (params) {
    return (dispatch, getState) => {
        if (cacheTerm(getState())) {
            dispatch(termRequest())
            return searchConditionsMovieAjax(params).then(res => {
                let start = params.start
                let items = res.data.map(item => new Movie(
                    item.id,
                    item.title,
                    item.rate,
                    item.cover
                ))
                dispatch(termResponce({
                    start,
                    items
                }))
            }).catch(err => {
                dispatch(termError())
            })
        } else {
            return Promise.resolve()
        }
    }
}
