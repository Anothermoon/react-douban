import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import style from './AmericaBoxList.css'
import PropTypes from 'prop-types'

class AmericaBoxList extends Component {

    static propTypes = {
        list: PropTypes.array
    }

    /**
     * 跳转到详情页
     * @param {Number} id 电影的id 
     */
    handleDetailClick (id) {
        this.props.onDetailClick(id)
    }

    render () {
        
        const { list } = this.props
        return (
            <List className={style['americal-box-list']}>
                {
                    list.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                onClick={() => this.handleDetailClick(item.movie.id)}
                                primaryText={item.movie.title}
                                secondaryText={`$${item.box}`}
                                leftAvatar={<Avatar src={item.movie.images.small} />}
                                rightIcon={<span className={style['americal-rank']}>{index + 1}</span>}
                            />
                        )
                    })
                }
            </List>
        )
    }
}

export default AmericaBoxList