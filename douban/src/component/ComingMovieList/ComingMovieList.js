import React, { Component } from 'react'
import style from './ComingMovieList.css'
import HotMovie from './../HotMovie/HotMovie'

class ComingMovieList extends Component {
    render () {
        const { ComingMovieList } = this.props
        return (
            <ul className={style['coming-movie-list']}>
                 {
                     ComingMovieList.map(item => {
                         return (
                             <HotMovie
                                key={item.id}
                                {...item}
                             />
                         )
                     })
                 }    
            </ul>
        )
    }
}

export default ComingMovieList
