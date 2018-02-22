import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import style from './AmericaBoxList.css'

class AmericaBoxList extends Component {
    render () {
        const { list } = this.props
        return (
            <List className={style['americal-box-list']}>
                {
                    list.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
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