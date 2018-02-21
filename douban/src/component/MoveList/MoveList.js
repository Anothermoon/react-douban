import React, { Component } from 'react'
import HotMovie from './../HotMovie/HotMovie'
import style from './MoveList.css'

class MoveList extends Component {
    render () {
        const { list } = this.props
        return (
            <ul className={style['list']}>
                {
                    list.map(item => {
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

export default MoveList
