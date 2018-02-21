import makeActionCreator from './../../util/ActionCreators'
import { getAmericaAjax } from './../../api/america'
import Rank from './../../model/Rank'

export const AMERICA_REQUEST = 'AMERICA_REQUEST'
export const AMERICA_RESPONCE = 'AMERICA_RESPONCE'
export const AMERICA_ERROR = 'AMERICA_ERROR'

export const americaRequest = makeActionCreator(AMERICA_REQUEST)
export const americaResponce = makeActionCreator(AMERICA_RESPONCE, 'res')
export const americaError = makeActionCreator(AMERICA_ERROR, 'err')

export function getAmerica () {
    return (dispatch, getState) => {
        dispatch(americaRequest())
        return getAmericaAjax().then(res => {
            let { date, subjects } = res
            let items = subjects.map(item => {
                return new Rank(item.box, item.subject)
            })
            dispatch(americaResponce({
                date,
                items
            }))
        }).catch(err => {
            dispatch(americaError())
        })
    }
}
