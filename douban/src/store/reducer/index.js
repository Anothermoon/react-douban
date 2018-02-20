import hotMovieList from './hotReducer'
import searchResultsList from './searchReducer'
import commingMovieList from './commingReducer'

function reducer (state = {}, action) {
    return {
        hotMovieList: hotMovieList(state.hotMovieList, action),
        searchResultsList: searchResultsList(state.searchResultsList, action),
        commingMovieList: commingMovieList(state.commingMovieList, action)
    }
}

export default reducer
