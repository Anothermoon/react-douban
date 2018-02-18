import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

class DbHeader extends Component {
    constructor () {
        super()
        this.state = {
        }
    }

    /**
     * 点击Bar左侧图标
     */
    handleLeftIconClick = () => {
        this.props.onLeftIconClick()
    }

    render () {
        const { title } = this.props
        return (
            <AppBar
                title={title}
                onLeftIconButtonClick={this.handleLeftIconClick}
            />
        )
    }
}

export default DbHeader