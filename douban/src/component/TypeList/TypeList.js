import React, { Component } from 'react'
import style from './TypeList.css'
import PropTypes from 'prop-types'

class TypeList extends Component {

    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.object),
        tags: PropTypes.arrayOf(PropTypes.object),
        type: PropTypes.string
    }

    handleTagsClick = (value) => {
        this.props.onTagsClick(value)
    }

    render () {
        const { list, tags } = this.props
        return (
            <ul className={style['type-list']} style={{
                width: `${list.length * 64}px`
            }}>
                {
                    list.map((item, index) => {
                        return (
                            <li
                                onClick={() => this.handleTagsClick(item)}
                                className={
                                    `${style['type-list-item']} ${tags.findIndex(tagsItem => tagsItem.key === item.key) !== -1 ? style['type-list-item-active'] : 0}`
                                }
                                key={index}>
                                {item.key}
                            </li>
                        )
                   }) 
                }
            </ul>
        )
    }
}

export default TypeList