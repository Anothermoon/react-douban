import hotMovieList from './hotReducer'

function reducer (state = {}, action) {
    return {
        hotMovieList: hotMovieList(state.hotMovieList, action)
    }
}

export default reducer
