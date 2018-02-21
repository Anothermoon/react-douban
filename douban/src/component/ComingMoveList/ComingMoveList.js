import React, { Component } from 'react'
import ComingMovie from './../ComingMovie/ComingMovie'
import style from './ComingMoveList.css'

class ComingMoveList extends Component {
    render () {
        const { comingMoveList } = this.props
        return (
            <ul className={style['coming-movie-list']}>
                 {
                     comingMoveList.map(item => {
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

export default ComingMoveList
