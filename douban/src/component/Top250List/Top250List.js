import React, { Component } from 'react'
import HotMovie from './../HotMovie/HotMovie'
import style from './Top250List.css'

class Top250List extends Component {
    render () {
        const { top250List } = this.props
        return (
            <ul className={style['top-250-list']}>
                {
                    top250List.map(item => {
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

export default Top250List
