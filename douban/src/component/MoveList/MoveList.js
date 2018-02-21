import React, { Component } from 'react'
import HotMovie from './../HotMovie/HotMovie'
import style from './MoveList.css'

class MoveList extends Component {
    render () {
        const { list, rank } = this.props
        return (
            <ul className={style['list']}>
                {
                    list.map((item,index) => {
                        return (
                            <HotMovie
                                rank={rank}
                                index={index}
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

export default MoveList
