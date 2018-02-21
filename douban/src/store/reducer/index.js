import hotMovieList from './hotReducer'
import searchResultsList from './searchReducer'
import comingMovieList from './comingReducer'
import top250List from './top250Reducer'
import americaList from './americaReducer'

function reducer (state = {}, action) {
    return {
        hotMovieList: hotMovieList(state.hotMovieList, action),
        searchResultsList: searchResultsList(state.searchResultsList, action),
        comingMovieList: comingMovieList(state.comingMovieList, action),
        top250List: top250List(state.top250List, action),
        americaList: americaList(state.americaList, action)
    }
}

export default reducer
