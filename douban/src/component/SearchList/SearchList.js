import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import RaisedButton from 'material-ui/RaisedButton'
import style from './SearchList.css'

class SearchList extends Component {

    /**
     * 跳转到详情页
     * @param {Number} id 
     */
    handleDetailClick = (id) => {
        this.props.onDetailClick(id)
    }

    /**
     * 加载更多
     */
    handleMoreClick = () => {
        this.props.onResultNextPage()
    }

    render () {
        const { result, isAll } = this.props
        return (
            <List>
                {
                    result.map(item => {
                        return (
                            <ListItem
                                onClick={() => this.handleDetailClick(item.id)}
                                key={item.id}
                                primaryText={item.title}
                                leftAvatar={<Avatar src={item.images.small} />}
                            />
                        )
                    })
                }
                {
                    !isAll && (
                        <div className={style['more']}>
                            <RaisedButton
                                onClick={this.handleMoreClick}
                                fullWidth={true}
                                label="more"/>
                        </div>
                    )
                }
            </List>
        )
    }
}

export default SearchList
