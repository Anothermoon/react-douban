import React, { Component } from 'react'
import HotMove from './../HotMove/HotMove'
import style from './../HotMovieList/HotMovieList.css'


class HotMovieList extends Component {
    render () {
        const { hotMovieList } = this.props
        return (
            <ul className={style['hot-movie-list']}>
                {
                    hotMovieList.map(item => {
                        return (
                            <HotMove
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
