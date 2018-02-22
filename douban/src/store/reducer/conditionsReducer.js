import {
    TERM_REQUEST,
    TERM_RESPONCE,
    TERM_ERROR,
    TERM_REFRESH
} from './../actions/conditionsActions'

function termList (state = {
    isReq: false,
    isOverdue: true
}, action) {
    switch(state.type) {
        default:
            return state
    }
}

export default termList
