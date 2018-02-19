import hotMovieList from './hotReducer'
import searchResultsList from './searchReducer'

function reducer (state = {}, action) {
    return {
        hotMovieList: hotMovieList(state.hotMovieList, action),
        searchResultsList: searchResultsList(state.searchResultsList, action)
    }
}

export default reducer
