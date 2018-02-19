import React, { Component } from 'react'
import style from './Search.css'
import SearchInput from './../../component/SearchInput/SearchInput'

class Search extends Component {
    render () {
        return (
            <section className={style['search-wrapper']}>
                <SearchInput/>
            </section>
        )
    }
}

export default Search