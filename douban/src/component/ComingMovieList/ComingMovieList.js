import React, { Component } from 'react'
import ComingMovie from './../ComingMovie/ComingMovie'
import style from './ComingMovieList.css'

class ComingMovieList extends Component {
    render () {
        const { ComingMovieList } = this.props
        return (
            <ul className={style['coming-movie-list']}>
                 {
                     ComingMovieList.map(item => {
                         return (
                             <ComingMovie
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
