import React, { Component } from 'react'
import HotMovie from './../HotMovie/HotMovie'
import style from './MoveList.css'

class MoveList extends Component {
    onDetailClick = (id) => {
        this.props.onDetailClick(id)
    }

    render () {
        const { list, rank } = this.props
        return (
            <ul className={style['list']}>
                {
                    list.map((item,index) => {
                        return (
                            <HotMovie
                                onDetailClick={this.onDetailClick}
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
