import React, { Component } from 'react'
import HotMovie from './../HotMovie/HotMovie'
import style from './MoveList.css'
import PropTypes from 'prop-types'

class MoveList extends Component {

    static propTypes = {
        list: PropTypes.array,
        rank: PropTypes.any
    }
    
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
