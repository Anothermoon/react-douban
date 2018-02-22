import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import style from './ConditionsSearchList.css'

class ConditionsSearchList extends Component {
    /**
     * 跳转到详情页
     * @param {id} 电影的id
     */
    handleDetailClick = (id) => {
        this.props.onDetailClick(id)
    }

    render () {
        const { list } = this.props
        return (
            <GridList className={style['grid-list-wrapper']} cellHeight={240}>
                {
                    list.map((item) => {
                        return (
                            <GridTile
                                onClick={() => this.handleDetailClick(item.id)}
                                className={style['grid-tile']}
                                key={item.id}
                                title={item.title}
                                subtitle={<span className={style['score']}><b>{item.rate}</b></span>}
                            >
                                <img src={item.image} width="160" height="237" alt="" />
                            </GridTile>
                        )
                    })
                }
            </GridList>
        )
    }
}

export default ConditionsSearchList
