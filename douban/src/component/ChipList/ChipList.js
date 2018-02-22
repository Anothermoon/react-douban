import React, { Component } from 'react'
import Chip from 'material-ui/Chip'
import style from './ChipList.css'

class ChipList extends Component {
    /**
     * 删除标签
     */
    handleDeleteTags = (key) => {
        this.props.onTagsDelete(key)
    }

    render () {
        const { list } = this.props
        return (
            <div className={style['chip-list']}>
                {
                    list.map((item, index) => {
                        return (
                            <Chip
                                className={style['chip-list-item']}
                                onRequestDelete={ () => this.handleDeleteTags(item.key) }
                                key={index}>
                                {item.key}
                            </Chip>
                        )
                    })
                }
            </div>
        )
    }
}

export default ChipList