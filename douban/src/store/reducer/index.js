import hotMovieList from './hotReducer'
import searchResultsList from './searchReducer'
import comingMovieList from './comingReducer'

function reducer (state = {}, action) {
    return {
        hotMovieList: hotMovieList(state.hotMovieList, action),
        searchResultsList: searchResultsList(state.searchResultsList, action),
        comingMovieList: comingMovieList(state.comingMovieList, action)
    }
}

export default reducer
