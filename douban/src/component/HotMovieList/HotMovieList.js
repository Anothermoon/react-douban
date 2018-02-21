import React, { Component } from 'react'
import HotMovie from './../HotMovie/HotMovie'
import style from './../HotMovieList/HotMovieList.css'


class HotMovieList extends Component {
    render () {
        const { hotMovieList } = this.props
        return (
            <ul className={style['hot-movie-list']}>
                {
                    hotMovieList.map(item => {
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

export default HotMovieList
