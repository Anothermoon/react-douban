import React, { Component } from 'react'
import style from './TypeList.css'

class TypeList extends Component {
    render () {
        const { list } = this.props
        return (
            <ul className={style['type-list']} style={{
                width: `${list.length * 64}px`
            }}>
                {
                    list.map((item, index) => {
                        return (
                            <li
                                className={
                                    `${style['type-list-item']} ${index === 0 ? style['type-list-item-active'] : 0}`
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