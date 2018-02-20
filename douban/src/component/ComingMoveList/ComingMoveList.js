import React, { Component } from 'react'
import ComingMove from './../ComingMove/ComingMove'
import style from './ComingMoveList.css'

class ComingMoveList extends Component {
    render () {
        const { comingMoveList } = this.props
        return (
            <ul className={style['coming-move-list']}>
                 {
                     comingMoveList.map(item => {
                         return (
                             <ComingMove
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
