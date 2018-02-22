import { searchConditionsMovieAjax } from './../../api/conditionsSearch'
import makeActionCreator from './../../util/ActionCreators'

export const TERM_REQUEST = 'TERM_REQUEST'
export const TERM_RESPONCE = 'TERM_RESPONCE'
export const TERM_ERROR = 'TERM_ERROR'
export const TERM_REFRESH = 'TERM_REFRESH'

export const termRequest = makeActionCreator(TERM_REQUEST)
export const termResponce = makeActionCreator(TERM_RESPONCE)
export const termError = makeActionCreator(TERM_ERROR)
export const termRefresh = makeActionCreator(TERM_REFRESH)

function cacheTerm (state) {
    return true
}

export function getTermMovie (params) {
    return (dispatch, getState) => {
        dispatch(termRequest())
        if (cacheTerm()) {
            return searchConditionsMovieAjax(params).then(res => {
                dispatch(termResponce())
            }).catch(err => {
                dispatch(termError())
            })
        } else {
            return Promise.resolve()
        }
    }
}
